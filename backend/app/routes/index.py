import json
from sqlalchemy.orm import Session
from fastapi import HTTPException, status, APIRouter, Depends, Request, Form
from typing import Optional, List
from pydantic import BaseModel

from models.index import get_db, User, Institution
from schemas.user import User as UserSchema, UserPost, UserRegister, UserUpdateInstitution
from schemas.institution import InstitutionSchema, InstitutionPost, InstitutionUser

from config import pyrebase, fb_auth
from auth import auth, get_user

# from schemas.student import StudentCourse

router = APIRouter()


class LoginRequest(BaseModel):
    email: str
    password: str

@router.post("/login" )
async def login(email: str = Form(...), password: str = Form(...), db: Session = Depends(get_db)):
    try:
        login = pyrebase.auth().sign_in_with_email_and_password(email, password)
        user = await get_user(login['idToken'], db)
        # print('Successfully Logged In', login['idToken'])
        print('Successfully Logged In..........................')
        print('Successfully Logged In..........................')
        print('Successfully Logged In..........................')
        print('Successfully Logged In..........................')
        print('Successfully Logged In..........................')
        print('Successfully Logged In..........................')
        print('Successfully Logged In', str(login))

        fb_auth.set_custom_user_claims(login['localId'], {'role': user.role})

        print('Successfully Logged In')
        user.token = login['idToken']
        user.refresh_token = login['refreshToken']
        return user

    except Exception as e:
        err =  str(e)
        message = err
        code = 401

        index = err.find("{")
        if index != -1:
            start_index = err.index("{")
            json_str = err[start_index:]

            error_data = json.loads(json_str)
            code = error_data["error"]["code"]
            message = error_data["error"]["message"]
             # errors = error_data["error"]["errors"]

        raise HTTPException(status_code=code, detail=message)


def create_user(user: UserRegister, db: Session = Depends(get_db)):
    user_dict = user.dict(exclude={"password", "institution_name", "institution_location"})
    db_user = None

    user_dict["status"] = 1

    db_user = db.query(User).filter(User.email==user.email).first()
    new_user = User(**user_dict)
    
    if db_user is None:
        db.add(new_user)
        db.commit()
        return new_user
    
    raise HTTPException(status_code=403, detail="User already registered.")

def update_user_institution(email, institution_id, db: Session = Depends(get_db)):
  try:
    # user_dict = user.dict()
    db_user = db.query(User).filter(User.email==email).first()

    # Update the user attributes individually
    # for key, value in user_dict.items():
    setattr(db_user, 'institution_id', institution_id)
    db.commit()
    return db_user

  except Exception as e:
    raise HTTPException(status_code=404, detail="User update problems")


def create_institution(user: UserRegister, user_id: int, db: Session = Depends(get_db)):
    # institution_dict = institution.dict(exclude={"password", "email", "firstname", "lastname", "role", "phone"})

    institution_dict = {
        "name": user.institution_name,
        "location": user.institution_location,
        "status": 1,
        "user_id": user_id,
    }

    # institution_dict["user_id"] = user_id #we need to make this user id the session user id
    # institution_dict["status"] = 1

    new_institution = Institution(**institution_dict)
    db.add(new_institution)
    db.commit()

    return new_institution


@router.post("/register")
def register(user:UserRegister, db: Session = Depends(get_db)):

    # set admin roles, Admin = 0
    user.role = 0 

    # correct phone sample data
    if user.phone == 'string': 
        user.phone = None 

    # create user firebase and update the role
    display_name = user.firstname + " " + user.lastname

    try:
        fb_user = fb_auth.create_user(email=user.email, password=user.password, display_name=display_name)
        fb_auth.set_custom_user_claims(fb_user._data['localId'], {'role': user.role})
        
        # create user database
        new_user = create_user(user, db)

        # create institution with user_id
        new_institution = create_institution(user, new_user.id, db)

        # update user with institution_id
        update_user = update_user_institution(new_user.email, new_institution.id, db)
        
        # return user
        return {"message": "User, " + user.firstname + ", successfully created"}
        # return {"message": user.role.title() + " successfully created"}
    except Exception as e:
        if 'EMAIL_EXISTS' in str(e):
            return create_user(user, db)
        else:
            print('Error creating user: ', str(e))
            raise HTTPException(status_code=401, detail=str(e))

    my_header = request.headers.get('User-Agent')
    # auth_header = request.headers.get('Authorization')
    # if auth_header == None:
    #     return [{"User-Agent": my_header}]
    return [{"User-Agent": my_header}, {"Authorization" : auth}]