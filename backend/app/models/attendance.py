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
    institution_id=Column(Integer)
    student_id=Column(Integer)
    guardian_arrival=Column(Integer)
    guardian_departure=Column(Integer)
    arrival=Column(DateTime, server_default=func.now())
    departure=Column(DateTime, server_default=func.now())


    def __repr__(self):
        return f"<Subject date={self.date} class={self.institution_id}>"