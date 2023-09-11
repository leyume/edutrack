from pydantic import BaseModel
from typing import Optional,List
from datetime import datetime
# from .student import Student

class Subject(BaseModel): #serializer
    name: str = 'Mathematics'
    class_id: int = 3
    teacher_id: int= 4

class SubjectPost(Subject): #serializer
    pass

    class Config:
        orm_mode=True

class SubjectSchema(SubjectPost):  # Output model for response
    pass
    
class SubjectUpdate(BaseModel): #serializer
    name: str = 'English'
    class_id: int = 1
    teacher_id: int = 1


