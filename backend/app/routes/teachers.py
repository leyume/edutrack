
from sqlalchemy.orm import Session
from sqlalchemy import and_
from fastapi import Depends, HTTPException, status, APIRouter, Response
from typing import Optional, List

from auth import auth
from routes.user import creating_user
from routes.subjects import update_subject
from schemas.subject import SubjectUpdate
from models.index import get_db, User, Subject
from schemas.user import User as UserSchema, UserPost, UserUpdate, UserInstitution, UserPass, UserClass, UserTeacher, UserUpdateTeacher

router = APIRouter()


# @router.get("", response_model=UserClass, status_code=status.HTTP_200_OK)
# def get_teacher(db: Session = Depends(get_db), auth=Depends(auth)):
#     return auth

@router.get("", response_model=List[UserInstitution], status_code=status.HTTP_200_OK)
def get_teachers(db: Session = Depends(get_db), auth=Depends(auth)):
    if auth.role == 0:
        users = db.query(User).filter(and_(User.role == 1, User.institution_id==auth.institution_id)).all()
        return users
    else:
        raise HTTPException(status_code=403, detail="You are not authorized")

@router.post("", response_model=UserSchema, status_code=status.HTTP_201_CREATED)
def create_teacher(
    user: UserTeacher, db: Session = Depends(get_db), auth=Depends(auth)
):
    if auth.role == 0:
        user.role = 1
        user.institution_id = auth.institution_id
        user.password = "edutrack"
        user.phone = "0907999"
        new_teacher = creating_user(user, db)

        subject = {
            "name": user.subject_name,
            "class_id": user.class_id,
            "teacher_id": new_teacher.id
        }
        new_subject = Subject(**subject)
        db.add(new_subject)
        db.commit()

        return new_teacher

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
    user: UserUpdateTeacher, db: Session = Depends(get_db), auth=Depends(auth)
):
  if auth.role == 0:
    try:
        # user.email = auth.email
        user_dict = user.dict()
        
        db_user = db.query(User).filter(User.id==user.id).first()

        # if db_user is None:
        #     raise HTTPException(status_code=404, detail="User does not exist")
        #     #this error is not working. will come back to it -fixed!

        # Update the user attributes individually
        for key, value in user_dict.items():
            setattr(db_user, key, value)
        subject = SubjectUpdate(
            name = user.subject_name,
            class_id = user.class_id,
            teacher_id = user.id
        )
        update_subject(subject, db)
        db.commit()
        return {"message": "Profile successfully updated"}

    except Exception as e:
        raise HTTPException(status_code=404, detail="User does not exist")

  else:
        return {"message": "You are not authorized"}
# @router.get("", response_model=User, status_code=status.HTTP_200_OK)
# def get_user(db: Session = Depends(get_db), auth=Depends(auth)):
#     return auth
    
