from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException, status, APIRouter, Response
from typing import Optional, List

# from models.index import get_db, Student, Tutor #StudentCourse
# from schemas.user import UserFull as User, UserUpdate
# from schemas.student import StudentCourse
# from auth import auth

from models.index import get_db, User, Institution, Classes
from schemas.classes import ClassesSchema, ClassesPost, ClassesUpdate

router = APIRouter()


@router.get("", response_model=List[ClassesSchema], status_code=status.HTTP_200_OK)
def get_classes(db: Session = Depends(get_db)):
    classes = db.query(Classes).all()
    return classes


@router.post("", response_model=ClassesSchema, status_code=status.HTTP_201_CREATED)
def create_classes(
    classes: ClassesPost, db: Session = Depends(get_db)
):
    classes_data = classes.dict()
    db_classteacher = db.query(User).filter(User.id == classes.teacher_id).first()

    if db_classteacher is None:
      raise HTTPException(status_code=403, detail="Teacher does not exist")
    
    new_class = Classes(**classes_data)
    
    db.add(new_class)
    db.commit()

    return new_class

@router.put("")
def update_classes(
    classes: ClassesUpdate, db: Session = Depends(get_db)
):
  try:
    classes_dict = classes.dict()
    
    db_classes = db.query(Classes).filter(Classes.name==classes.name).first()

    for key, value in classes_dict.items():
        setattr(db_classes, key, value)
    db.commit()
    return {"message": "Class Profile successfully updated"}

  except Exception as e:
    raise HTTPException(status_code=401, detail="Teacher does not exist")


# @router.get("", response_model=User, status_code=status.HTTP_200_OK)
# def get_user(db: Session = Depends(get_db), auth=Depends(auth)):
#     return auth
    
