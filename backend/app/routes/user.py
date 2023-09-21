from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException, status, APIRouter, Response
from typing import Optional, List

# from models.index import get_db, Student, Tutor #StudentCourse
# from schemas.user import UserFull as User, UserUpdate
# from schemas.student import StudentCourse
from auth import auth
from config import pyrebase, fb_auth

from models.index import get_db, User, Classes, Subject
from schemas.user import User as UserSchema, UserPost, UserUpdate, UserClass, UserInstitution

router = APIRouter()


# @router.get("", response_model=List[UserClass], status_code=status.HTTP_200_OK)
# def get_user(db: Session = Depends(get_db)):
#     users = db.query(User).all()
#     return users

@router.get("", response_model=UserClass, status_code=status.HTTP_200_OK)
def get_user(db: Session = Depends(get_db), auth=Depends(auth)):
    return auth


@router.post("", response_model=UserSchema, status_code=status.HTTP_201_CREATED)
def create_user(
    user: UserPost, db: Session = Depends(get_db), auth=Depends(auth)
):
    user.role = 0
    user.institution_id = auth.institution_id
    return creating_user(user, db)

@router.put("")
def update_user(
    user: UserUpdate, db: Session = Depends(get_db), auth=Depends(auth)
):
    try:
        user_dict = user.dict(exclude={'email', 'role'})

        db_user = db.query(User).filter(User.id==auth.id).first()

        # Update the user attributes individually
        for key, value in user_dict.items():
            if value: 
                setattr(db_user, key, value)
        db.commit()

        return {"message": "Profile successfully updated"}

    except Exception as e:
        raise HTTPException(status_code=404, detail="User does not exist")



def creating_user(user, db):
    db_user = db.query(User).filter(User.email==user.email).first()

    if db_user:
        raise HTTPException(status_code=403, detail="email already in use")

    # set non student to firebase
    if user.role != 2:
        display_name = user.firstname + " " + user.lastname
        fb_user = fb_auth.create_user(email=user.email, password=user.password, display_name=display_name)
        fb_auth.set_custom_user_claims(fb_user._data['localId'], {'role': user.role})
        

    # user.role = role
    # user.institution_id = 7
    user.status = 1
    new_user = User(**user.dict(exclude={"password", "class_id", "class_name", "subject_name", "student_id", "guardian_fname", "guardian_lname","guardian_relation", "guardian_email", "principal", "expiry_date"}))
    
    db.add(new_user)
    db.commit()

    return new_user


