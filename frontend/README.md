# VectorShift Frontend Technical Assessment

This project is my submission for the VectorShift Frontend Technical Assessment.

## Features

- Node abstraction using a reusable `BaseNode` component.
- Five additional custom nodes:
  - API Node
  - Database Node
  - Math Node
  - Condition Node
  - Delay Node
- Modernized UI with consistent styling.
- Dynamic Text Node:
  - Automatically resizes based on user input.
  - Generates input handles dynamically from variables enclosed in `{{ }}`.
- Backend integration with FastAPI.
- Pipeline analysis displaying:
  - Number of nodes
  - Number of edges
  - DAG (Directed Acyclic Graph) validation

## Project Structure

```
frontend/
backend/
```

## Frontend Setup

```bash
cd frontend
npm install
npm start
```

The frontend runs at:

```
http://localhost:3000
```

## Backend Setup

```bash
cd backend
pip install fastapi uvicorn
python -m uvicorn main:app --reload
```

The backend runs at:

```
http://127.0.0.1:8000
```

## Technologies Used

- React
- React Flow
- Zustand
- FastAPI
- JavaScript
- Python

## Assessment Requirements Completed

- Node abstraction
- Five new nodes
- Improved UI styling
- Dynamic Text Node
- Backend integration
- DAG validation