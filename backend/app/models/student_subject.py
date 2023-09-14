from sqlalchemy.sql.expression import null
from sqlalchemy import String, Boolean, Integer, Column, Text, TIMESTAMP, ForeignKey, Float
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from typing import Optional,List
from .database import Base


class StudentSubject(Base):
    __tablename__ = "students_subjects"
    id = Column(Integer, primary_key=True)
    student_id = Column(Integer, ForeignKey('users.id'))
    subject_id = Column(Integer, ForeignKey('subjects.id'))
    # assessment = Column(Float(precision=2, scale=2), nullable=True)
    # exam_result = Column(Float(precision=2, scale=2), nullable=True)
    # user = relationship("User", back_populates="classes")
    # course = relationship("Course", back_populates="questions")
    

    def __repr__(self):
        return f"<QuestionOption id={self.id}>"

