from pydantic import BaseModel
from typing import Optional,List
from datetime import datetime
# from .student import Student


class ClassesPost(BaseModel): #serializer
    name: str = 'Basic 5'
    teacher_id: int= 4

    class Config:
        orm_mode=True

class Classes(ClassesPost): #serializer
    id: Optional[int] = None
    

class ClassesSchema(ClassesPost):  # Output model for response
    id: Optional[int] = None
    
class ClassesUpdate(BaseModel): #serializer
    id: Optional[int] = None
    name: Optional[str] = None
    teacher_id: Optional[int]


