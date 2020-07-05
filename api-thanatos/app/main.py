# uvicorn app.main:app --reload --port=8080
from typing import Optional
from fastapi import Depends, FastAPI, Header, HTTPException

from .routers import users

app = FastAPI()

app.include_router(
    users.router,
    prefix="/users",
    tags=["users"],
    responses={404: {"description": "Not found"}},
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}