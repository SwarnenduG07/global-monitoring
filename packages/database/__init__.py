"""
Shared MongoDB Database Package

This package provides MongoDB connection and utilities
that can be shared across multiple backend services.
"""

from .connection import get_database, close_database_connection
from .models import BaseModel
from .config import DatabaseConfig

__all__ = [
    "get_database",
    "close_database_connection", 
    "BaseModel",
    "DatabaseConfig"
]
