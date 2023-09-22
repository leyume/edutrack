from sqlalchemy.sql.expression import null
from sqlalchemy.orm import relationship
from sqlalchemy import String,Boolean,Integer,Column,Text,TIMESTAMP, ForeignKey, Table, DateTime
from sqlalchemy.sql import func
from .database import Base
# from .enrolment import Enrolment


class Attendance(Base):
    __tablename__='attendance'
    id=Column(Integer,primary_key=True)
    date=Column(TIMESTAMP(timezone=True), nullable=False, server_default=func.now())
    institution_id=Column(Integer, ForeignKey('institutions.id'))
    student_id=Column(Integer, ForeignKey('users.id'))
    guardian_arrival_id=Column(Integer, ForeignKey('users.id'))
    guardian_departure_id=Column(Integer, ForeignKey('users.id'))
    arrival=Column(DateTime, server_default=func.now())
    departure=Column(DateTime, server_default=func.now())
    student = relationship("User", primaryjoin='User.id == Attendance.student_id', back_populates="attendance")
    guardian_arrival = relationship("User", primaryjoin='User.id == Attendance.guardian_arrival_id')
    guardian_departure = relationship("User", primaryjoin='User.id == Attendance.guardian_departure_id')


    def __repr__(self):
        return f"<Subject date={self.date} class={self.institution_id}>"