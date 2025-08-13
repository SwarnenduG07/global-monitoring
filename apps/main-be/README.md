# Main Backend Service

A FastAPI-based main backend service for the global monitoring application.

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
   uv run uvicorn main:app --reload --port 8000
   ```

## API Documentation

Once running, visit:
- API docs: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Project Structure

```
main-be/
├── app/
│   ├── __init__.py
│   ├── routers/          # API route handlers
│   ├── models/           # Pydantic models
│   ├── services/         # Business logic
│   └── database/         # Database configuration
├── main.py               # FastAPI application entry point
├── pyproject.toml        # Project configuration
└── README.md
```
