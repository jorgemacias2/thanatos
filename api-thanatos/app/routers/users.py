from typing import List
from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session

from .. import crud, schemas, database


router = APIRouter()


@router.post("/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(database.get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db=db, user=user)


@router.get("/", response_model=List[schemas.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(database.get_db)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users

#@router.delete

@router.put(
    "/{user_id}",
    tags=["custom"],
    responses={403: {"description": "Operation forbidden"}},
)
async def update_user(user_id: str):
    if user_id != "foo":
        raise HTTPException(status_code=403, detail="You can only update the user: foo")
    return {"user_id": user_id, "name": "The Fighters"}


