from pydantic import BaseModel
from typing import Optional,List
from datetime import datetime
# from .student import Student

class Classes(BaseModel): #serializer
    name: str = 'Basic 5'
    teacher_id: int= 4

class ClassesPost(Classes): #serializer
    pass

    class Config:
        orm_mode=True

class ClassesSchema(ClassesPost):  # Output model for response
    pass
    
class ClassesUpdate(BaseModel): #serializer
    name: str = 'Basic 5'
    teacher_id: int = 7


