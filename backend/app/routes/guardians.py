
from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException, status, APIRouter, Response
from typing import Optional, List
from sqlalchemy import and_

# from models.index import get_db, Student, Tutor #StudentCourse
# from schemas.user import UserFull as User, UserUpdate
# from schemas.student import StudentCourse
from auth import auth
from routes.user import creating_user

from models.index import get_db, User, StudentGuardian
from schemas.user import User as UserSchema, UserPost, UserUpdate, UserInstitution, UserPass, UserClass, UserGuardian, UserUpdateGuardian

router = APIRouter()


# @router.get("", response_model=UserClass, status_code=status.HTTP_200_OK)
# def get_guardians(db: Session = Depends(get_db), auth=Depends(auth)):
#     return auth

@router.get("", response_model=List[UserInstitution], status_code=status.HTTP_200_OK)
def get_guardians(db: Session = Depends(get_db), auth=Depends(auth)):
    if auth.role == 0:
        users = db.query(User).filter(and_(User.role == 3, User.institution_id==auth.institution_id)).all()
        return users
    else:
        raise HTTPException(status_code=403, detail="You are not authorized")


@router.post("", response_model=UserSchema, status_code=status.HTTP_201_CREATED)
def create_guardian(
    user: UserGuardian, db: Session = Depends(get_db), auth=Depends(auth)
):
    user.password = 'edutrack'
    user.role = 3
    user.institution_id = auth.institution_id
    new_guardian = creating_user(user, db)

    # add relations to student
    new_relations = StudentGuardian(
        student_id=user.student_id,
        institution_id=user.institution_id,
        guardian_id=new_guardian.id,
        principal = user.principal if user.principal else 1,
        expiry_date = user.expiry_date if user.expiry_date else None
    )

    db.add(new_relations)
    db.commit()

    return new_guardian


@router.put("")
def update_guardian(
    user: UserUpdateGuardian, db: Session = Depends(get_db), auth=Depends(auth)
):
    if (auth.role == 0 or auth.role == 3):
        try:
            user.principal = user.principal if user.principal else 1
            user.expiry_date = user.expiry_date if user.expiry_date else None
            user_dict = user.dict()
            
            db_user = db.query(User).filter(User.email==user.email).first()
            # if db_user is None:
            #     raise HTTPException(status_code=404, detail="User does not exist")
            #     #this error is not working. will come back to it -fixed!

            # Update the user attributes individually
            for key, value in user_dict.items():
                if (key != "principal" and key != "expiry_date" and key != "student_id"):
                    setattr(db_user, key, value)
            
            db_relation = db.query(StudentGuardian).filter(and_(StudentGuardian.guardian_id==db_user.id, StudentGuardian.student_id==user.student_id)).first()
            setattr(db_relation, "principal", user.principal)
            setattr(db_relation, "expiry_date", user.expiry_date)

            db.commit()
            return {"message": "Profile successfully updated"}

        except Exception as e:
            raise HTTPException(status_code=404, detail="User does not exist")
    else:
        return {"message": "You are not authorized"}


# @router.get("", response_model=User, status_code=status.HTTP_200_OK)
# def get_user(db: Session = Depends(get_db), auth=Depends(auth)):
#     return auth
    
