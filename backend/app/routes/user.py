from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException, status, APIRouter, Response
from typing import Optional, List

# from models.index import get_db, Student, Tutor #StudentCourse
# from schemas.user import UserFull as User, UserUpdate
# from schemas.student import StudentCourse
from auth import auth

from models.index import get_db, User
from schemas.user import User as UserSchema, UserPost, UserUpdate, UserClass

router = APIRouter()


@router.get("", response_model=List[UserClass], status_code=status.HTTP_200_OK)
def get_user(db: Session = Depends(get_db)):
    users = db.query(User).all()
    return users


@router.post("", response_model=UserSchema, status_code=status.HTTP_201_CREATED)
def create_user(
    user: UserPost, db: Session = Depends(get_db), auth=Depends(auth)
):
    user.role = 0
    user.institution_id = auth.institution_id
    return creating_user(user, db)

@router.put("")
def update_user(
    user: UserUpdate, db: Session = Depends(get_db)
):
  try:
    user_dict = user.dict()
    
    db_user = db.query(User).filter(User.email==user.email).first()

    # if db_user is None:
    #     raise HTTPException(status_code=404, detail="User does not exist")
    #     #this error is not working. will come back to it -fixed!

     # Update the user attributes individually
    for key, value in user_dict.items():
        setattr(db_user, key, value)
    db.commit()
    return {"message": "Profile successfully updated"}

  except Exception as e:
    raise HTTPException(status_code=404, detail="User does not exist")



def creating_user(user, db):

    db_user = db.query(User).filter(User.email==user.email).first()

    if db_user:
        raise HTTPException(status_code=403, detail="email already in use")

    # user.role = role
    # user.institution_id = 7
    user.status = 1
    new_user = User(**user.dict())
    
    db.add(new_user)
    db.commit()

    return new_user


# @router.get("", response_model=User, status_code=status.HTTP_200_OK)
# def get_user(db: Session = Depends(get_db), auth=Depends(auth)):
#     return auth
    
