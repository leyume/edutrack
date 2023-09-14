from sqlalchemy.sql.expression import null
from sqlalchemy import String, Boolean, Integer, Column, Text, TIMESTAMP, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from typing import Optional,List
from .database import Base


class StudentClass(Base):
    __tablename__ = "students_classes"
    id = Column(Integer, primary_key=True)
    student_id = Column(Integer, ForeignKey('users.id'))
    class_id = Column(Integer, ForeignKey('classes.id'))
    # user = relationship("User", back_populates="classes")
    # course = relationship("Course", back_populates="questions")
    

    def __repr__(self):
        return f"<QuestionOption id={self.id}>"

