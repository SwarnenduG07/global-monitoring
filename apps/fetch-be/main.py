from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import get_database, close_database_connection, ping_database

app = FastAPI(
    title="Fetch Backend Service",
    description="Backend service for fetching and processing data",
    version="0.1.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure this properly for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_event():
    """Initialize database connection on startup"""
    await get_database()

@app.on_event("shutdown")
async def shutdown_event():
    """Close database connection on shutdown"""
    await close_database_connection()

@app.get("/")
async def root():
    return {"message": "Fetch Backend Service is running"}

@app.get("/health")
async def health_check():
    db_status = await ping_database()
    return {
        "status": "healthy" if db_status else "unhealthy",
        "service": "fetch-be",
        "database": "connected" if db_status else "disconnected"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
