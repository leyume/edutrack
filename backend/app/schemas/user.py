from pydantic import BaseModel
from typing import Optional,List
from datetime import datetime
# from .student import Student

class UserPost(BaseModel): #serializer
    email: str = 'chriss@yopmail.com'
    firstname: str = 'Chriss'
    lastname: str='Doe'
    phone: Optional[str] = None
    role: Optional[str] = None
    status: Optional[str] = None

class User(UserPost): #serializer
    id: Optional[int] = None
    institution_id: Optional[int] = None
    role: Optional[str] = None
    relation: Optional[str] = None
    status: Optional[str] = None
    # created_at: Optional[datetime] = None
    # updated_at: Optional[datetime] = None

    class Config:
        orm_mode=True

class UserUpdate(BaseModel): #serializer
    email: str = 'chriss@yopmail.com'
    firstname: str = 'Chriss'
    lastname: str='Doe'
    phone: Optional[str] = None


class Institution(BaseModel):
    id: Optional[int] = None
    name: str
    location: str

    class Config:
        orm_mode = True

class UserInstitution(User): 
    institution: Optional[Institution] = None