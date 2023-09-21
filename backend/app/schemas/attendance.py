from pydantic import BaseModel
from typing import Optional,List
from datetime import datetime
# from .student import Student

class Attendance(BaseModel): #serializer
    date: datetime = datetime.now()
    student_id: int
    guardian_arrival_id: int
    guardian_arrival: int
    arrival: datetime = datetime.now()

class UserX(BaseModel):
    id: Optional[int] = None
    firstname: str 
    lastname: str
    relation: Optional[str]
    email: Optional[str]

    class Config:
        orm_mode = True

class AttendanceFull(BaseModel):
    id: Optional[int] = None
    date: datetime
    student_id: int #Optional[UserX]
    guardian_arrival_id: int 
    arrival: datetime 
    guardian_departure_id: Optional[int] = None 
    departure: Optional[datetime] = None 
    student: UserX
    guardian_arrival: UserX
    guardian_departure: Optional[UserX]

    class Config:
        orm_mode = True


class AttendancePost(Attendance): #serializer
    institution_id: int = 7 #should be taken from the session user
    pass

    class Config:
        orm_mode=True

class AttendanceSchema(AttendancePost):  # Output model for response
    id:Optional[int] = None

    
class AttendanceUpdate(BaseModel): #serializer
    date: datetime = datetime.now()
    institution_id: int = 1 #should be taken from the session user
    student_id: int = 1
    guardian_departure_id: int = 3
    departure: datetime = datetime.now()