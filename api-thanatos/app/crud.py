from sqlalchemy.orm import Session

from . import models, schemas


def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, user: schemas.UserCreate):
    fake_hashed_password = user.password + "notreallyhashed"
    db_user = models.User(email=user.email, password=fake_hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def delete_user(db: Session, user_id: int):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    db.delete(user)
    db.commit()
    return

def update_user(db :Session, user_id: int, user: schemas.UserUpdate):
    db_user = db.query(models.User).filter(models.User.id == user_id).first()
    db_user.email = user.email
    db_user.password = user.password
    db_user.is_active = user.is_active
    db.commit()
    return db_user

def find_user(db :Session, user_id: int):
    db_user = db.query(models.User).filter(models.User.id == user_id).first()
    return db_user

def find_by_email(db :Session, user_email: str):
    db_user = db.query(models.User).filter(models.User.email == user_email).first()
    return db_user

def get_active_users(db: Session):
    return db.query(models.User).filter(models.User.is_active == True).all()
