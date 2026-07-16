# VectorShift Frontend Technical Assessment

This repository contains my submission for the VectorShift Frontend Technical Assessment.

## Project Structure

```
VectorShift/
├── backend/
└── frontend/
```

## Frontend

```bash
cd frontend
npm install
npm start
```

Runs on:

```
http://localhost:3000
```

## Backend

```bash
cd backend
pip install fastapi uvicorn
python -m uvicorn main:app --reload
```

Runs on:

```
http://127.0.0.1:8000
```

## Features

- Reusable BaseNode abstraction
- Five additional custom nodes
- Modernized UI
- Dynamic Text Node with automatic handles
- Backend integration
- DAG validation