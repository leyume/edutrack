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
    user_dict = user.dict()
    
    db_user = db.query(User).filter(User.id==user.id).first()

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

    # set non student to firebase
    if user.role != 2:
        display_name = user.firstname + " " + user.lastname
        fb_user = fb_auth.create_user(email=user.email, password=user.password, display_name=display_name)
        fb_auth.set_custom_user_claims(fb_user._data['localId'], {'role': user.role})
        

    # user.role = role
    # user.institution_id = 7
    user.status = 1
    new_user = User(**user.dict(exclude={"password", "class_id", "subject_name", "student_id", "guardian_fname", "guardian_lname","guardian_relation", "guardian_email", "principal", "exp_date"}))
    
    db.add(new_user)
    db.commit()

    return new_user


def creating_userBK(user, db):

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

    if user.role == 1:
        new_user = User(**user.dict(exclude={"password", "class_id", "subject_name"}))
        db.add(new_user)
        db.commit()

        new_teacher = db.query(User).filter(User.email==new_user.email).first
        return new_teacher
        subject = {
            "name": user.subject_name,
            "class_id": user.class_id,
            "teacher_id": new_teacher.id
        }
        new_subject = Subject(**subject)
        db.add(new_subject)
    elif user.role == 2:
        new_user = User(**user.dict(exclude={"class_name", "guardian_fname", "guardian_lname","guardian_relation", "guardian_email"}))
        db.add(new_user)
        db.commit()
        #create guardian
        guardian_data = {
            "firstname": user.guardian_fname,
            "lastname": user.guardian_lname,
            "email": user.guardian_email,
            "relation": user.guardian_relation,
            "institution_id": auth.institution_id,
            "role": 3
        }
        db_user = db.query(User).filter(User.email==user.guardian_email).first()
        if db_user:
            stud_guard_data = {
                "student_id": new_user.id,
                "guardian_id": db_user.id,
                "institution_id": auth.institution_id
            }
            new_stud_guard = StudentGuardian(**stud_guard_data)
            db.add(new_stud_guard)
        else:
            display_name = user.guardian_fname + " " + user.guardian_lname
            fb_user = fb_auth.create_user(email=user.guardian_email, password="password", display_name=display_name)
            fb_auth.set_custom_user_claims(fb_user._data['localId'], {'role': 3})

            new_guard = User(**guardian_data)
            stud_guard_data = {
                "student_id": new_user.id,
                "guardian_id": new_guard.id,
                "institution_id": auth.institution_id
            }
            new_stud_guard = StudentGuardian(**stud_guard_data)

    elif user.role == 3:
        new_user = User(**user.dict(exclude={"password"}))
    else:
        return {"message": "you are not authorized to create super admin"}
        
    
    new_user = User(**user.dict(exclude={"password", "student_id"}))

    db.add(new_user)
    db.commit()

    return new_user

    
# @router.get("/teachers", response_model=List[UserInstitution], status_code=status.HTTP_200_OK)
# def get_teachers(db: Session = Depends(get_db), auth=Depends(auth)):
#     users = db.query(User).filter(User.role == 1 & User.institution_id==auth.institution_id).all()
#     return users

# @router.get("/guardians", response_model=List[UserInstitution], status_code=status.HTTP_200_OK)
# def get_guardians(db: Session = Depends(get_db), auth=Depends(auth)):
#     users = db.query(User).filter(User.role == 3 & User.institution_id==auth.institution_id).all()
#     return users

# @router.get("/students", response_model=List[UserClass], status_code=status.HTTP_200_OK)
# def get_students(db: Session = Depends(get_db), auth=Depends(auth)):
#     users = db.query(User).filter(User.role == 2 & User.institution_id==auth.institution_id).all()
#     return users
