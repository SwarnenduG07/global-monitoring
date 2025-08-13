from typing import Dict, Any, List, Optional, Type, TypeVar, Generic
from datetime import datetime
from motor.motor_asyncio import AsyncIOMotorDatabase, AsyncIOMotorCollection
from bson import ObjectId
import logging

from .models import BaseModel
from .utils import db_utils

logger = logging.getLogger(__name__)

T = TypeVar('T', bound=BaseModel)


class BaseRepository(Generic[T]):
    """Base repository class for MongoDB operations"""
    
    def __init__(self, database: AsyncIOMotorDatabase, collection_name: str, model_class: Type[T]):
        self.database = database
        self.collection_name = collection_name
        self.model_class = model_class
        self.collection: AsyncIOMotorCollection = database[collection_name]
    
    async def create(self, data: Dict[str, Any]) -> T:
        """Create a new document"""
        try:
            # Create model instance to validate data
            model_instance = self.model_class(**data)
            
            # Convert to dict and insert
            document_data = model_instance.dict(by_alias=True)
            result = await self.collection.insert_one(document_data)
            
            # Fetch and return the created document
            created_doc = await self.collection.find_one({"_id": result.inserted_id})
            return self.model_class(**db_utils.serialize_object_id(created_doc))
            
        except Exception as e:
            logger.error(f"Error creating document in {self.collection_name}: {e}")
            raise
    
    async def get_by_id(self, document_id: str) -> Optional[T]:
        """Get document by ID"""
        try:
            if not ObjectId.is_valid(document_id):
                return None
                
            document = await self.collection.find_one({"_id": ObjectId(document_id)})
            if document:
                return self.model_class(**db_utils.serialize_object_id(document))
            return None
            
        except Exception as e:
            logger.error(f"Error getting document by ID from {self.collection_name}: {e}")
            raise
    
    async def get_many(
        self,
        filters: Optional[Dict[str, Any]] = None,
        skip: int = 0,
        limit: int = 100,
        sort_by: Optional[str] = None,
        sort_order: int = 1
    ) -> List[T]:
        """Get multiple documents with filtering, pagination, and sorting"""
        try:
            mongo_filter = db_utils.build_filter(filters or {})
            sort_criteria = db_utils.build_sort(sort_by, sort_order)
            
            cursor = self.collection.find(mongo_filter).skip(skip).limit(limit).sort(sort_criteria)
            documents = await cursor.to_list(length=limit)
            
            return [
                self.model_class(**db_utils.serialize_object_id(doc))
                for doc in documents
            ]
            
        except Exception as e:
            logger.error(f"Error getting documents from {self.collection_name}: {e}")
            raise
    
    async def update_by_id(self, document_id: str, update_data: Dict[str, Any]) -> Optional[T]:
        """Update document by ID"""
        try:
            if not ObjectId.is_valid(document_id):
                return None
            
            # Add updated_at timestamp
            update_data["updated_at"] = datetime.utcnow()
            
            result = await self.collection.update_one(
                {"_id": ObjectId(document_id)},
                {"$set": update_data}
            )
            
            if result.modified_count > 0:
                return await self.get_by_id(document_id)
            return None
            
        except Exception as e:
            logger.error(f"Error updating document in {self.collection_name}: {e}")
            raise
    
    async def delete_by_id(self, document_id: str) -> bool:
        """Delete document by ID"""
        try:
            if not ObjectId.is_valid(document_id):
                return False
                
            result = await self.collection.delete_one({"_id": ObjectId(document_id)})
            return result.deleted_count > 0
            
        except Exception as e:
            logger.error(f"Error deleting document from {self.collection_name}: {e}")
            raise
    
    async def count(self, filters: Optional[Dict[str, Any]] = None) -> int:
        """Count documents matching filters"""
        try:
            mongo_filter = db_utils.build_filter(filters or {})
            return await self.collection.count_documents(mongo_filter)
            
        except Exception as e:
            logger.error(f"Error counting documents in {self.collection_name}: {e}")
            raise
    
    async def exists(self, filters: Dict[str, Any]) -> bool:
        """Check if document exists matching filters"""
        try:
            mongo_filter = db_utils.build_filter(filters)
            document = await self.collection.find_one(mongo_filter, {"_id": 1})
            return document is not None
            
        except Exception as e:
            logger.error(f"Error checking document existence in {self.collection_name}: {e}")
            raise
