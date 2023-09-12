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
    classes = relationship("Classes", secondary="students_classes", back_populates="students")

    guardians = relationship(
        "User",
        secondary="students_guardians",
        primaryjoin="and_(User.id==students_guardians.c.student_id)",
        secondaryjoin="and_(User.id==students_guardians.c.guardian_id)",
        backref="studentz",
    )

    wards = relationship(
        "User",
        secondary="students_guardians",
        primaryjoin="and_(User.id==students_guardians.c.guardian_id)",
        secondaryjoin="and_(User.id==students_guardians.c.student_id)",
        backref="guardianx",
    )

    teachers = relationship(
        "User",
        secondary="students_teachers",
        primaryjoin="and_(User.id==students_teachers.c.student_id)",
        secondaryjoin="and_(User.id==students_teachers.c.teacher_id)",
        backref="studentx",
    )

    students = relationship(
        "User",
        secondary="students_teachers",
        primaryjoin="and_(User.id==students_teachers.c.teacher_id)",
        secondaryjoin="and_(User.id==students_teachers.c.student_id)",
        backref="teacherx",
    )
    



    def __repr__(self):
        return f"<User firstname={self.firstname} email={self.email}>"