from sqlalchemy.sql.expression import null
from sqlalchemy.orm import relationship
from sqlalchemy import String,Boolean,Integer,Column,Text,TIMESTAMP, ForeignKey, Table
from sqlalchemy.sql import func
from .database import Base
# from .enrolment import Enrolment


class Classes(Base):
    __tablename__='classes'
    id=Column(Integer,primary_key=True)
    name=Column(String(255))
    teacher_id=Column(Integer)
    


    def __repr__(self):
        return f"<Class name={self.name} teacher={self.teacher_id}>"