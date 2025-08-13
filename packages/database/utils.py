from typing import Dict, Any, List, Optional
from bson import ObjectId
from motor.motor_asyncio import AsyncIOMotorCollection
import logging

logger = logging.getLogger(__name__)


class DatabaseUtils:
    """Utility functions for database operations"""
    
    @staticmethod
    def serialize_object_id(data: Dict[str, Any]) -> Dict[str, Any]:
        """Convert ObjectId to string in dictionary"""
        if isinstance(data, dict):
            for key, value in data.items():
                if isinstance(value, ObjectId):
                    data[key] = str(value)
                elif isinstance(value, dict):
                    data[key] = DatabaseUtils.serialize_object_id(value)
                elif isinstance(value, list):
                    data[key] = [
                        DatabaseUtils.serialize_object_id(item) if isinstance(item, dict)
                        else str(item) if isinstance(item, ObjectId)
                        else item
                        for item in value
                    ]
        return data
    
    @staticmethod
    def serialize_object_ids(data: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """Convert ObjectIds to strings in list of dictionaries"""
        return [DatabaseUtils.serialize_object_id(item) for item in data]
    
    @staticmethod
    async def create_indexes(collection: AsyncIOMotorCollection, indexes: List[Dict[str, Any]]):
        """Create indexes for a collection"""
        try:
            for index in indexes:
                await collection.create_index(
                    index.get("keys"),
                    **{k: v for k, v in index.items() if k != "keys"}
                )
            logger.info(f"Created {len(indexes)} indexes for collection {collection.name}")
        except Exception as e:
            logger.error(f"Failed to create indexes for collection {collection.name}: {e}")
            raise
    
    @staticmethod
    def build_filter(filters: Dict[str, Any]) -> Dict[str, Any]:
        """Build MongoDB filter from dictionary"""
        mongo_filter = {}
        
        for key, value in filters.items():
            if value is not None:
                if key == "id":
                    # Handle ObjectId conversion for id field
                    if isinstance(value, str) and ObjectId.is_valid(value):
                        mongo_filter["_id"] = ObjectId(value)
                    else:
                        mongo_filter["_id"] = value
                else:
                    mongo_filter[key] = value
        
        return mongo_filter
    
    @staticmethod
    def build_sort(sort_by: Optional[str] = None, sort_order: int = 1) -> List[tuple]:
        """Build MongoDB sort criteria"""
        if sort_by:
            return [(sort_by, sort_order)]
        return [("created_at", -1)]  # Default sort by created_at descending


# Utility instance
db_utils = DatabaseUtils()
