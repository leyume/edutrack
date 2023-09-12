from sqlalchemy.sql.expression import null
from sqlalchemy import String, Boolean, Integer, Column, Text, TIMESTAMP, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from typing import Optional,List
from .database import Base


class StudentTeacher(Base):
    __tablename__ = "students_teachers"
    id = Column(Integer, primary_key=True)
    student_id = Column(Integer, ForeignKey('users.id'))
    teacher_id = Column(Integer, ForeignKey('users.id'))
    institution_id = Column(Integer, ForeignKey('institutions.id'))
    

    def __repr__(self):
        return f"<StudentTeacher id={self.id}>"

