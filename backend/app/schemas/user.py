from pydantic import BaseModel
from typing import Optional,List
from datetime import datetime
# from .student import Student

class UserPost(BaseModel): #serializer
    email: str = 'chriss@yopmail.com'
    firstname: str = 'Chriss'
    lastname: str='Doe'
    phone: Optional[str] = None
    role: Optional[int] = None
    status: Optional[str] = None
    institution_id: Optional[int] = None

class User(UserPost): #serializer
    id: Optional[int] = None
    institution_id: Optional[int] = None
    role: Optional[int] = None
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


#
#
class UserX(BaseModel):
    id: Optional[int] = None
    firstname: str 
    lastname: str

    class Config:
        orm_mode = True

        
class Classes(BaseModel):
    id: Optional[int] = None
    name: str
    # options: List[StudentClass]

    class Config:
        orm_mode = True

class UserClass(UserInstitution): 
    classes: List[Classes]
    guardians: List[UserX]
    wards: List[UserX]
    teachers: List[UserX]
    students: List[UserX]