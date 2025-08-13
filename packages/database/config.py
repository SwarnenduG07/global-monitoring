import os
from typing import Optional
from pydantic import BaseSettings, Field


class DatabaseConfig(BaseSettings):
    """Database configuration settings"""
    
    # MongoDB connection settings
    mongodb_url: str = Field(
        default="mongodb://localhost:27017",
        env="MONGODB_URL",
        description="MongoDB connection URL"
    )
    
    database_name: str = Field(
        default="global_monitoring",
        env="DATABASE_NAME", 
        description="Database name"
    )
    
    # Connection pool settings
    min_pool_size: int = Field(
        default=10,
        env="MONGODB_MIN_POOL_SIZE",
        description="Minimum connection pool size"
    )
    
    max_pool_size: int = Field(
        default=100,
        env="MONGODB_MAX_POOL_SIZE",
        description="Maximum connection pool size"
    )
    
    # Timeout settings
    server_selection_timeout_ms: int = Field(
        default=5000,
        env="MONGODB_SERVER_SELECTION_TIMEOUT_MS",
        description="Server selection timeout in milliseconds"
    )
    
    connect_timeout_ms: int = Field(
        default=10000,
        env="MONGODB_CONNECT_TIMEOUT_MS",
        description="Connection timeout in milliseconds"
    )
    
    socket_timeout_ms: int = Field(
        default=10000,
        env="MONGODB_SOCKET_TIMEOUT_MS",
        description="Socket timeout in milliseconds"
    )
    
    class Config:
        env_file = ".env"
        case_sensitive = False


# Global config instance
db_config = DatabaseConfig()
