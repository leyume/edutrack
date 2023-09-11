from sqlalchemy.sql.expression import null
from sqlalchemy.orm import relationship
from sqlalchemy import String,Boolean,Integer,Column,Text,TIMESTAMP, ForeignKey, Table
from sqlalchemy.sql import func
from .database import Base
# from .enrolment import Enrolment


class User(Base):
    __tablename__='users'
    id=Column(Integer,primary_key=True)
    institution_id=Column(Integer, ForeignKey('institutions.id'))
    email=Column(String(255),nullable=False,unique=True)
    firstname=Column(String(255))
    lastname=Column(String(255))
    phone=Column(String(50))
    relation=Column(String(255))
    role=Column(Integer)
    status=Column(Integer)
    created_at = Column(TIMESTAMP(timezone=True), nullable=False, server_default=func.now())
    updated_at = Column(TIMESTAMP(timezone=True), default=None, onupdate=func.now())
    institution = relationship("Institution", back_populates="users")
    # enrolments = relationship("Enrolment", back_populates="student")
    # institution = relationship("Institution", back_populates="users")
    # courses = relationship('Course', secondary='enrolments', back_populates='students')



    def __repr__(self):
        return f"<User firstname={self.firstname} email={self.email}>"