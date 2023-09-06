from sqlalchemy.sql.expression import null
from sqlalchemy.orm import relationship
from sqlalchemy import String,Boolean,Integer,Column,Text,TIMESTAMP, ForeignKey, Table
from sqlalchemy.sql import func
from .database import Base
# from .enrolment import Enrolment


class Institution(Base):
    __tablename__='institutions'
    id=Column(Integer,primary_key=True)
    user_id=Column(Integer)
    name=Column(String(255))
    location=Column(String(255))
    status=Column(Integer)
    created_at = Column(TIMESTAMP(timezone=True), nullable=False, server_default=func.now())
    updated_at = Column(TIMESTAMP(timezone=True), default=None, onupdate=func.now())
    users = relationship("User", back_populates="institution")
    


    def __repr__(self):
        return f"<Institution name={self.name} email={self.email}>"