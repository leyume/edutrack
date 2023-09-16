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
    # role: Optional[int] = None
    relation: Optional[str] = None
    status: Optional[str] = None
    # created_at: Optional[datetime] = None
    # updated_at: Optional[datetime] = None

    class Config:
        orm_mode=True

class UserStudent(UserPost):
    email: str = 'chriss@yopmail.com'
    firstname: str = 'Chriss'
    lastname: str ='Doe'
    phone: Optional[str] = None
    class_name: int = 3
    guardian_fname: str = 'Sandra'
    guardian_lname: str = 'Doe'
    guardian_relation: str = 'mother'
    guardian_email: str = 'sandra@yopmail.com'
    # role: Optional[int] = None

class UserTeacher(UserPost):
    email: str = 'chriss@yopmail.com'
    firstname: str = 'Chriss'
    lastname: str ='Doe'
    phone: Optional[str] = None
    password: Optional[str] = "password"
    class_id: int = 3
    subject_name: str = 'Agriculture'

class UserPass(UserPost):
    email: str = 'chriss@yopmail.com'
    firstname: str = 'Chriss'
    lastname: str='Doe'
    phone: Optional[str] = None
    role: Optional[int] = None
    password: str


class UserUpdate(BaseModel): #serializer
    email: str = 'chriss@yopmail.com'
    firstname: str = 'Chriss'
    lastname: str='Doe'
    phone: Optional[str] = None

class UserUpdateInstitution(BaseModel): #serializer
    email: str = 'chriss@yopmail.com'
    institution_id: int = 1


class UserRegister(BaseModel): #serializer
    email: str = 'chriss@yopmail.com'
    password: str = 'passme'
    firstname: str = 'Chriss'
    lastname: str='Doe'
    phone: Optional[int] = None
    role: Optional[int] = None
    status: Optional[str] = None
    institution_name: str = 'Jay Schools'
    institution_location: str = 'Lagos NG'


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

class Subject(BaseModel):
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
    subjects: List[Subject]