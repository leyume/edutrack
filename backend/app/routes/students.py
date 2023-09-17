
from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException, status, APIRouter, Response
from typing import Optional, List

# from models.index import get_db, Student, Tutor #StudentCourse
# from schemas.user import UserFull as User, UserUpdate
# from schemas.student import StudentCourse
from auth import auth
from routes.user import creating_user
from routes.guardians import create_guardian

from models.index import get_db, User, StudentClass
from schemas.user import User as UserSchema, UserStudent, UserUpdate, UserInstitution, UserClass, UserGuardian

router = APIRouter()


# @router.get("", response_model=List[UserClass], status_code=status.HTTP_200_OK)
# def get_students(db: Session = Depends(get_db), auth=Depends(auth)):
#     return auth.students

@router.get("", response_model=List[UserClass], status_code=status.HTTP_200_OK)
def get_students(db: Session = Depends(get_db), auth=Depends(auth)):
    if auth.role == 0:
        users = db.query(User).filter(User.role == 2 and User.institution_id==auth.institution_id).all()
        return users
    else:
        raise HTTPException(status_code=403, detail="You are not authorized")


@router.post("", response_model=UserSchema, status_code=status.HTTP_201_CREATED)
def create_student(
    user: UserStudent, db: Session = Depends(get_db), auth=Depends(auth)
):
    user.role = 2
    user.institution_id = auth.institution_id
    new_student =  creating_user(user, db)

    # Guardian relations
    if user.guardian_email:
        guardian = UserGuardian(
            firstname=user.guardian_fname,
            lastname=user.guardian_lname,
            email=user.guardian_email,
            relation=user.guardian_relation,
            student_id=new_student.id,
            phone="080",
            password="edutrack",
        )
        create_guardian(guardian, db, auth)

    # Classes relations
    if user.class_id:
        class_relations = StudentClass(
            student_id=new_student.id,
            class_id=user.class_id,
        )
        db.add(class_relations)
        db.commit()

    return new_student


@router.put("")
def update_student(
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


# @router.get("", response_model=User, status_code=status.HTTP_200_OK)
# def get_user(db: Session = Depends(get_db), auth=Depends(auth)):
#     return auth
    
