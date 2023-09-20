
from sqlalchemy.orm import Session
from sqlalchemy import and_
from fastapi import Depends, HTTPException, status, APIRouter, Response
from typing import Optional, List
import random

# from models.index import get_db, Student, Tutor #StudentCourse
# from schemas.user import UserFull as User, UserUpdate
# from schemas.student import StudentCourse
from auth import auth
from routes.user import creating_user
from routes.guardians import create_guardian
from routes.guardians import update_guardian


from models.index import get_db, User, StudentClass
from schemas.user import User as UserSchema, UserStudent, UserUpdate, UserInstitution, UserClass, UserGuardian, UserUpdateStudent, UserUpdateGuardian

router = APIRouter()


# @router.get("", response_model=List[UserClass], status_code=status.HTTP_200_OK)
# def get_students(db: Session = Depends(get_db), auth=Depends(auth)):
#     return auth.students

@router.get("", response_model=List[UserClass], status_code=status.HTTP_200_OK)
def get_students(db: Session = Depends(get_db), auth=Depends(auth)):
    if auth.role == 0:
        users = db.query(User).filter(and_(User.role == 2, User.institution_id==auth.institution_id)).all()
        return users
    else:
        raise HTTPException(status_code=403, detail="You are not authorized")


@router.post("", response_model=UserSchema, status_code=status.HTTP_201_CREATED)
def create_student(
    user: UserStudent, db: Session = Depends(get_db), auth=Depends(auth)
):
    random_int = str(random.randint(1000,9999))
    user.email = user.firstname + user.lastname + random_int +"@et.edu"

    user.role = 2
    user.institution_id = auth.institution_id
    user.phone = "070"
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
    user: UserUpdateStudent, db: Session = Depends(get_db), auth=Depends(auth)
):
  if auth.role == 0:
    try:
        # user_dict = user.dict()
            
        db_user = db.query(User).filter(User.id==user.student_id).first()
        setattr(db_user, "firstname", user.firstname)
        setattr(db_user, "lastname", user.lastname)
            

        db_class = db.query(StudentClass).filter(StudentClass.student_id == user.student_id).first()
        setattr(db_class, "class_id", user.class_id)
        db_guard = db.query(User).filter(User.email == user.guardian_email).first()
        db_guardian = UserUpdateGuardian(
            firstname = user.guardian_fname,
            lastname = user.guardian_lname,
            email = user.guardian_email,
            relation = user.guardian_relation,
            student_id = user.student_id,
            phone = "09034",
            password = "edutrack",
            principal = user.principal
        )

        if (db_guard and db_guard.role == 3):
            update_guardian(db_guardian, db, auth)
        else:
            create_guardian(db_guardian, db, auth)


            # if db_user is None:
            #     raise HTTPException(status_code=404, detail="User does not exist")
            #     #this error is not working. will come back to it -fixed!

            # Update the user attributes individually
        return {"message": "Profile successfully updated"}
    
    except Exception as e:
        raise HTTPException(status_code=404, detail="User does not exist")
        
  else:
    return {"message": "You are not authorized"}
# @router.get("", response_model=User, status_code=status.HTTP_200_OK)
# def get_user(db: Session = Depends(get_db), auth=Depends(auth)):
#     return auth
    
