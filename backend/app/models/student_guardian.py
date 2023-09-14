from sqlalchemy.sql.expression import null
from sqlalchemy import String, Boolean, Integer, Column, Text, TIMESTAMP, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from typing import Optional,List
from .database import Base


class StudentGuardian(Base):
    __tablename__ = "students_guardians"
    id = Column(Integer, primary_key=True)
    student_id = Column(Integer, ForeignKey('users.id'))
    guardian_id = Column(Integer, ForeignKey('users.id'))
    institution_id = Column(Integer, ForeignKey('institutions.id'))

    # user = relationship("User", backref="user_roles")
    # role = relationship("Role", backref="role_users")
    

    def __repr__(self):
        return f"<StudentGuardian id={self.id}>"

