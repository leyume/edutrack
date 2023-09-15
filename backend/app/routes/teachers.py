
from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException, status, APIRouter, Response
from typing import Optional, List

from auth import auth
from routes.user import creating_user

from models.index import get_db, User
from schemas.user import User as UserSchema, UserPost, UserUpdate, UserInstitution, UserPass

router = APIRouter()


@router.get("", response_model=List[UserInstitution], status_code=status.HTTP_200_OK)
def get_teacher(db: Session = Depends(get_db)):
    users = db.query(User).filter(User.role == 1).all()
    return users


@router.post("", response_model=UserSchema, status_code=status.HTTP_201_CREATED)
def create_teacher(
    user: UserPass, db: Session = Depends(get_db), auth=Depends(auth)
):
    user.role = 1
    user.institution_id = auth.institution_id
    return creating_user(user, db)

    # user.role = 1
    # user.status = 1
    # user.institution_id = 7 #should be session user institution id
    # new_user = User(**user.dict())

    # db_user = db.query(User).filter(User.email==user.email).first()

    # if db_user:
    #     raise HTTPException(status_code=403, detail="email already in use")
    
    # db.add(new_user)
    # db.commit()

    # return new_user

@router.put("")
def update_teacher(
    user: UserUpdate, db: Session = Depends(get_db), auth=Depends(auth)
):
  try:
    user.email = auth.email
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


# @router.get("", response_model=User, status_code=status.HTTP_200_OK)
# def get_user(db: Session = Depends(get_db), auth=Depends(auth)):
#     return auth
    
