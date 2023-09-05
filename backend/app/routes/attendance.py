from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException, status, APIRouter, Response
from typing import Optional, List
from sqlalchemy import and_

# from models.index import get_db, Student, Tutor #StudentCourse
# from schemas.user import UserFull as User, UserUpdate
# from schemas.student import StudentCourse
# from auth import auth

from models.index import get_db, User, Institution, Classes, Subject, Attendance
from schemas.attendance import AttendanceSchema, AttendancePost, AttendanceUpdate

router = APIRouter()


@router.get("", response_model=List[AttendanceSchema], status_code=status.HTTP_200_OK)
def get_attendance(db: Session = Depends(get_db)):
    attendance = db.query(Attendance).all()
    return attendance


@router.post("", response_model=AttendanceSchema, status_code=status.HTTP_201_CREATED)
def create_attendance(
    attendance: AttendancePost, db: Session = Depends(get_db)
):
    attendance_data = attendance.dict()
    db_student = db.query(User).filter(User.id == attendance.student_id).first()
    db_guardian = db.query(User).filter(User.id == attendance.guardian_id).first()
    db_institution = db.query(Institution).filter(Institution.id == attendance.institution_id).first()

    if db_student is None:
      raise HTTPException(status_code=403, detail="Student does not exist")

    if db_guardian is None:
      raise HTTPException(status_code=403, detail="Guardian does not exist")

    if db_institution is None:
      raise HTTPException(status_code=403, detail="Institution does not exist")
    
    new_attendance = Attendance(**attendance_data)
    
    db.add(new_attendance)
    db.commit()

    return new_attendance

@router.put("")
def update_attendance(
    attendance: AttendanceUpdate, db: Session = Depends(get_db)
):
  try:
    attendance_dict = attendance.dict()
    
    db_attendance = db.query(Attendance).filter(
      and_(
        Attendance.student_id == attendance.student_id,
        Attendance.departure == None)
        ).first()
    # db_student = db.query(Attendance).filter(Attendance.student_id == attendance.student_id).first()

    # if db_student is None:
    #   raise ValueError
    #   # return {"message": "Student does not exist"}

    if db_attendance is None:
      raise ValueError
      # return {"message": "Student has not arrived"}

    for key, value in attendance_dict.items():
        setattr(db_attendance, key, value)
    db.commit()
    return {"message": "Attendance successfully updated"}

  except ValueError:
    raise HTTPException(status_code=404, detail="Student has not arrived")
    
  except Exception as e:
    raise HTTPException(status_code=500, detail="Institution/Guardian does not exist")


# @router.get("", response_model=User, status_code=status.HTTP_200_OK)
# def get_user(db: Session = Depends(get_db), auth=Depends(auth)):
#     return auth
    
