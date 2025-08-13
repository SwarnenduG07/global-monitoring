import asyncio
from typing import Optional
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from pymongo.errors import ConnectionFailure, ServerSelectionTimeoutError
import logging

from .config import db_config

logger = logging.getLogger(__name__)

class DatabaseConnection:
    """MongoDB connection manager"""
    
    def __init__(self):
        self.client: Optional[AsyncIOMotorClient] = None
        self.database: Optional[AsyncIOMotorDatabase] = None
        self._lock = asyncio.Lock()
    
    async def connect(self) -> AsyncIOMotorDatabase:
        """Establish connection to MongoDB"""
        async with self._lock:
            if self.client is None:
                try:
                    self.client = AsyncIOMotorClient(
                        db_config.mongodb_url,
                        minPoolSize=db_config.min_pool_size,
                        maxPoolSize=db_config.max_pool_size,
                        serverSelectionTimeoutMS=db_config.server_selection_timeout_ms,
                        connectTimeoutMS=db_config.connect_timeout_ms,
                        socketTimeoutMS=db_config.socket_timeout_ms,
                    )
                    
                    # Test the connection
                    await self.client.admin.command('ping')
                    
                    self.database = self.client[db_config.database_name]
                    logger.info(f"Connected to MongoDB database: {db_config.database_name}")
                    
                except (ConnectionFailure, ServerSelectionTimeoutError) as e:
                    logger.error(f"Failed to connect to MongoDB: {e}")
                    raise
                except Exception as e:
                    logger.error(f"Unexpected error connecting to MongoDB: {e}")
                    raise
            
            return self.database
    
    async def close(self):
        """Close MongoDB connection"""
        async with self._lock:
            if self.client:
                self.client.close()
                self.client = None
                self.database = None
                logger.info("MongoDB connection closed")
    
    async def ping(self) -> bool:
        """Check if database connection is alive"""
        try:
            if self.client:
                await self.client.admin.command('ping')
                return True
        except Exception as e:
            logger.error(f"Database ping failed: {e}")
        return False


# Global connection instance
_db_connection = DatabaseConnection()


async def get_database() -> AsyncIOMotorDatabase:
    """Get database instance"""
    return await _db_connection.connect()


async def close_database_connection():
    """Close database connection"""
    await _db_connection.close()


async def ping_database() -> bool:
    """Ping database to check connection"""
    return await _db_connection.ping()
