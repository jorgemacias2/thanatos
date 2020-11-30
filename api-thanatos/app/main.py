# uvicorn app.main:app --reload --port=8080
from functools import lru_cache
from typing import Optional
from fastapi import Depends, FastAPI, Header, HTTPException

from . import config
from .routers import users
from . import models
from .database import engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

@lru_cache()
def get_settings():
    return config.Settings()

app.include_router(
    users.router,
    prefix="/users",
    tags=["users"],
    responses={404: {"description": "Not found"}},
)

@app.get("/")
def read_root(settings: config.Settings = Depends(get_settings)):
    return {"Hello": settings.app_name}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}
