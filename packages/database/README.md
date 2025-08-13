# Database Package

A shared MongoDB database package for the global monitoring application. This package provides connection management, base models, and repository patterns that can be used across multiple backend services.

## Features

- **Async MongoDB Connection**: Using Motor (async MongoDB driver)
- **Connection Pooling**: Configurable connection pool settings
- **Base Models**: Pydantic models with ObjectId support
- **Repository Pattern**: Generic repository for CRUD operations
- **Configuration Management**: Environment-based configuration
- **Utilities**: Helper functions for common database operations

## Installation

```bash
uv add ./packages/database
```

## Configuration

Set the following environment variables or create a `.env` file:

```env
MONGODB_URL=mongodb://localhost:27017
DATABASE_NAME=global_monitoring
MONGODB_MIN_POOL_SIZE=10
MONGODB_MAX_POOL_SIZE=100
MONGODB_SERVER_SELECTION_TIMEOUT_MS=5000
MONGODB_CONNECT_TIMEOUT_MS=10000
MONGODB_SOCKET_TIMEOUT_MS=10000
```

## Usage

### Basic Connection

```python
from database import get_database, close_database_connection

# Get database instance
db = await get_database()

# Use the database
collection = db["my_collection"]
result = await collection.find_one({"name": "example"})

# Close connection when done
await close_database_connection()
```

### Using Base Models

```python
from database import BaseModel
from typing import Optional

class User(BaseModel):
    name: str
    email: str
    age: Optional[int] = None

# Create instance
user = User(name="John Doe", email="john@example.com")
```

### Using Repository Pattern

```python
from database import BaseRepository, get_database

class UserRepository(BaseRepository[User]):
    def __init__(self, database):
        super().__init__(database, "users", User)

# Usage
db = await get_database()
user_repo = UserRepository(db)

# Create user
user_data = {"name": "John Doe", "email": "john@example.com"}
new_user = await user_repo.create(user_data)

# Get user by ID
user = await user_repo.get_by_id(str(new_user.id))

# Get multiple users with filtering
users = await user_repo.get_many(
    filters={"age": {"$gte": 18}},
    skip=0,
    limit=10,
    sort_by="name",
    sort_order=1
)

# Update user
updated_user = await user_repo.update_by_id(
    str(user.id),
    {"age": 25}
)

# Delete user
success = await user_repo.delete_by_id(str(user.id))
```

### FastAPI Integration

```python
from fastapi import FastAPI, Depends
from database import get_database, close_database_connection

app = FastAPI()

@app.on_event("startup")
async def startup_event():
    await get_database()

@app.on_event("shutdown")
async def shutdown_event():
    await close_database_connection()

@app.get("/users/{user_id}")
async def get_user(user_id: str, db = Depends(get_database)):
    user_repo = UserRepository(db)
    return await user_repo.get_by_id(user_id)
```

## Project Structure

```
database/
├── __init__.py           # Package exports
├── config.py             # Configuration settings
├── connection.py         # MongoDB connection management
├── models.py             # Base Pydantic models
├── repository.py         # Generic repository pattern
├── utils.py              # Database utilities
├── pyproject.toml        # Package configuration
└── README.md
```

## Dependencies

- **motor**: Async MongoDB driver
- **pymongo**: MongoDB driver (used by motor)
- **pydantic**: Data validation and settings management
- **python-dotenv**: Environment variable loading
