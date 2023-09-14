from sqlalchemy.sql.expression import null
from sqlalchemy.orm import relationship
from sqlalchemy import String,Boolean,Integer,Column,Text,TIMESTAMP, ForeignKey, Table
from sqlalchemy.sql import func
from .database import Base
# from .enrolment import Enrolment


class Subject(Base):
    __tablename__='subjects'
    id=Column(Integer,primary_key=True)
    name=Column(String(255))
    class_id=Column(Integer)
    teacher_id=Column(Integer)
    students = relationship("User", secondary="students_subjects", back_populates="subjects")
    


    def __repr__(self):
        return f"<Subject name={self.name} class={self.class_id} teacher={self.teacher_id}>"