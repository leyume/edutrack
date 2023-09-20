from pydantic import BaseModel
from typing import Optional,List
from datetime import datetime
# from .student import Student

class Attendance(BaseModel): #serializer
    date: datetime = datetime.now()
    student_id: int = 1
    guardian_arrival_id: int = 3
    arrival: datetime = datetime.now()


class AttendancePost(Attendance): #serializer
    institution_id: int = 7 #should be taken from the session user
    pass

    class Config:
        orm_mode=True

class AttendanceSchema(AttendancePost):  # Output model for response
    pass
    
class AttendanceUpdate(BaseModel): #serializer
    date: datetime = datetime.now()
    institution_id: int = 1 #should be taken from the session user
    student_id: int = 1
    guardian_departure_id: int = 3
    departure: datetime = datetime.now()