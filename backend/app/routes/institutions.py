from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException, status, APIRouter, Response
from typing import Optional, List

# from models.index import get_db, Student, Tutor #StudentCourse
# from schemas.user import UserFull as User, UserUpdate
# from schemas.student import StudentCourse
from auth import auth

from models.index import get_db, User, Institution
from schemas.institution import InstitutionSchema, InstitutionPost, InstitutionUpdate, InstitutionUser

router = APIRouter()


@router.get("", response_model=List[InstitutionSchema], status_code=status.HTTP_200_OK)
def get_institution(db: Session = Depends(get_db), auth=Depends(auth)):
    institutions = db.query(Institution).all()
    return institutions

@router.get("/users", response_model=List[InstitutionUser], status_code=status.HTTP_200_OK)
def get_institution(db: Session = Depends(get_db), auth=Depends(auth)):
    institutions = db.query(Institution).all()
    return institutions


@router.post("", response_model=InstitutionSchema, status_code=status.HTTP_201_CREATED)
def create_institution(
    institution: InstitutionPost, db: Session = Depends(get_db), auth=Depends(auth)
):
    institution_data = institution.dict()

    institution_data["user_id"] = auth.institution_id #we need to make this user id the session user id
    institution_data["status"] = 1
    # user_id = db.query(User).filter(User.email==institution.email)
    # institution.user_id = 1
    # user.role = 1
    # institution.status = 1
    new_institution = Institution(**institution_data)
    
    db.add(new_institution)
    db.commit()

    return new_institution

@router.put("")
def update_institution(
    institution: InstitutionUpdate, db: Session = Depends(get_db), auth=Depends(auth)
):
  try:
    institution_dict = institution.dict()
    
    db_institution = db.query(Institution).filter(Institution.id==auth.institution_id).first() #need to edit to check for session user institution instead

    for key, value in institution_dict.items():
        setattr(db_institution, key, value)
    db.commit()
    return {"message": "Institution Profile successfully updated"}

  except Exception as e:
    raise HTTPException(status_code=401, detail="Unauthorized")


# @router.get("", response_model=User, status_code=status.HTTP_200_OK)
# def get_user(db: Session = Depends(get_db), auth=Depends(auth)):
#     return auth
    
