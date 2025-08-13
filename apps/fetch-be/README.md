# Fetch Backend Service

A FastAPI-based backend service for fetching and processing data.

## Setup

1. Install dependencies with UV:
   ```bash
   uv sync
   ```

2. Run the development server:
   ```bash
   uv run python main.py
   ```

   Or with uvicorn directly:
   ```bash
   uv run uvicorn main:app --reload --port 8001
   ```

## API Documentation

Once running, visit:
- API docs: http://localhost:8001/docs
- ReDoc: http://localhost:8001/redoc

## Project Structure

```
fetch-be/
├── app/
│   ├── __init__.py
│   ├── routers/          # API route handlers
│   ├── models/           # Pydantic models
│   └── services/         # Business logic
├── main.py               # FastAPI application entry point
├── pyproject.toml        # Project configuration
└── README.md
```
