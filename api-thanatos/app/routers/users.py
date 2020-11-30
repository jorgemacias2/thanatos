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

@router.delete("/{user_id}")
def delete_users(user_id: str, db: Session = Depends(database.get_db)):
    crud.delete_user(db, user_id)
    return user_id + " has been deleted"

@router.put(
    "/{user_id}",
    response_model=schemas.User,
)
def update_user(user_id: str, user: schemas.UserUpdate, db: Session = Depends(database.get_db)):
    return crud.update_user(db, user_id, user)

@router.get("/{user_id}", response_model=schemas.User)
def find_user(user_id: str, db: Session = Depends(database.get_db)):
    return crud.find_user(db, user_id)

@router.get("/email/{user_email}", response_model=schemas.User)
def find_by_email(user_email: str, db: Session = Depends(database.get_db)):
    return crud.find_by_email(db, user_email)

@router.get("/user/active", response_model=List[schemas.User])
def get_active_users(db: Session = Depends(database.get_db)):
    return crud.get_active_users(db)



