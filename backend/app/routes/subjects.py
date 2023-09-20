from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException, status, APIRouter, Response
from typing import Optional, List

# from models.index import get_db, Student, Tutor #StudentCourse
# from schemas.user import UserFull as User, UserUpdate
# from schemas.student import StudentCourse
# from auth import auth

from models.index import get_db, User, Institution, Classes, Subject
from schemas.subject import SubjectSchema, SubjectPost, SubjectUpdate

router = APIRouter()


@router.get("", response_model=List[SubjectSchema], status_code=status.HTTP_200_OK)
def get_subject(db: Session = Depends(get_db)):
    subjects = db.query(Subject).all()
    return subjects


@router.post("", response_model=SubjectSchema, status_code=status.HTTP_201_CREATED)
def create_subject(
    subject: SubjectPost, db: Session = Depends(get_db)
):
    subject_data = subject.dict()
    db_teacher = db.query(User).filter(User.id == subject.teacher_id).first()
    db_class = db.query(Classes).filter(Classes.id == subject.class_id).first()

    if db_teacher is None:
      raise HTTPException(status_code=403, detail="Teacher does not exist")

    if db_class is None:
      raise HTTPException(status_code=403, detail="Class does not exist")
    
    new_subject = Subject(**subject_data)
    
    db.add(new_subject)
    db.commit()

    return new_subject

@router.put("")
def update_subject(
    subject: SubjectUpdate, db: Session = Depends(get_db)
):
  try:
    subject_dict = subject.dict()
    

    db_teacher = db.query(User).filter(User.id == subject.teacher_id).first()
    db_class = db.query(Classes).filter(Classes.id == subject.class_id).first()

    if (db_teacher is None or db_teacher.role != 1):
      raise ValueError
        
      # return {"message": "Teacher does not exist"}

    if db_class is None:
      raise ValueError
      # return {"message": "Class does not exist"}

    db_subject = db.query(Subject).filter(Subject.name==subject.name).first()

    for key, value in subject_dict.items():
        setattr(db_subject, key, value)
    db.commit()
    return {"message": "Subject successfully updated"}

  except ValueError:
    raise HTTPException(status_code=404, detail="Teacher/class does not exist")
    
  except Exception as e:
    raise HTTPException(status_code=401, detail="Subject does not exist")


# @router.get("", response_model=User, status_code=status.HTTP_200_OK)
# def get_user(db: Session = Depends(get_db), auth=Depends(auth)):
#     return auth
    
