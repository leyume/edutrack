from pydantic import BaseModel
from typing import Optional,List
from datetime import datetime
# from .student import Student

class Institution(BaseModel): #serializer
    # email: str = 'chriss@yopmail.com'
    name: str = 'Chris Apostolic College'
    location: str='Lekki, Lagos'
    status: Optional[str] = None

class InstitutionPost(Institution): #serializer
    id:Optional[int] = None
    user_id: Optional[int] = None
    status: Optional[str] = None
    # created_at: Optional[datetime] = None
    # updated_at: Optional[datetime] = None

    class Config:
        orm_mode=True

class InstitutionSchema(InstitutionPost):  # Output model for response
    pass
    
class InstitutionUpdate(BaseModel): #serializer
    name: str = 'Chris Apostolic College'
    location: str= 'Lekki, Lagos'


class User(BaseModel):
    id: Optional[int] = None
    firstname: str
    lastname: str

    class Config:
        orm_mode = True

class InstitutionUser(InstitutionPost): 
    users: List[User]


