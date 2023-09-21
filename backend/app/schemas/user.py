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
    email: Optional[str] = 'chriss@yopmail.com'
    firstname: str = 'Chriss'
    lastname: str ='Doe'
    phone: Optional[str] = None
    class_id: int = 3
    guardian_fname: str = 'Sandra'
    guardian_lname: str = 'Doe'
    guardian_relation: str = 'mother'
    guardian_email: str = 'sandra@yopmail.com'
    principal: Optional[int] = None
    # role: Optional[int] = None

class UserTeacher(UserPost):
    email: str = 'chriss@yopmail.com'
    firstname: str = 'Chriss'
    lastname: str ='Doe'
    phone: Optional[str] = None
    password: Optional[str] = "password"
    class_id: int = 3
    subject_name: str = 'Agriculture'

class UserGuardian(BaseModel):
    email: str = 'guardian@yopmail.com'
    firstname: str = 'Guard'
    lastname: str='Doe'
    relation: str='Mother'
    phone: Optional[str] = None
    role: Optional[int] = None
    status: Optional[str] = None
    password: str
    institution_id: Optional[int] = None
    student_id: Optional[int] = None
    principal: Optional[int] = None
    expiry_date: Optional[datetime] = None

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
    relation: Optional[str] = None
    principal: Optional[int] = None
    expiry_date: Optional[datetime] = None
    student_id: Optional[int] = None
    class_id: Optional[int] = None

class UserUpdateGuardian(BaseModel): #serializer
    email: str = 'chriss@yopmail.com'
    firstname: str = 'Chriss'
    lastname: str='Doe'
    phone: Optional[str] = None
    relation: Optional[str] = None
    principal: Optional[int] = None
    expiry_date: Optional[datetime] = None
    student_id: Optional[int] = None

class UserUpdateStudent(BaseModel): #serializer
    firstname: str = 'Chriss'
    lastname: str='Doe'
    student_id: int = None
    class_id: int = None
    # status: Optional[str] = None
    guardian_fname: str = 'Sandra'
    guardian_lname: str = 'Doe'
    guardian_relation: str = 'mother'
    guardian_email: str = 'sandra@yopmail.com'
    principal: Optional[int] = 1

class UserUpdateTeacher(BaseModel): #serializer
    id: Optional[int] = None
    firstname: str = 'Brandon'
    lastname: str='Stark'
    subject_name: str = 'Biology'
    class_id: int = None
    status: Optional[str] = None

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

# Ward and Attendance

class Attendance(BaseModel):
    id: Optional[int] = None
    date: datetime 
    student_id: int
    guardian_arrival_id: int 
    arrival: datetime 
    guardian_departure_id: Optional[int] = None 
    departure: Optional[datetime] = None 
    guardian_arrival: UserX
    guardian_departure: Optional[UserX]

    class Config:
        orm_mode = True

class UserA(BaseModel):
    id: Optional[int] = None
    firstname: str 
    lastname: str
    attendance: List[Attendance]

    class Config:
        orm_mode = True

class UserGuardianWard(UserInstitution): 
    wards: List[UserA]