import pyrebase

import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth as fb_auth

# pyrebase - only here for logging in because firebase-admin doesn't have login
firebaseConfig = {
    "apiKey": "AIzaSyCSg4qAG-X5PahwHeETXi9eS89VKuZPLtg",
    "authDomain": "edutrackz.firebaseapp.com",
    "projectId": "edutrackz",
    "storageBucket": "edutrackz.appspot.com",
    "messagingSenderId": "605470053998",
    "appId": "1:605470053998:web:092058e073da3251e4b87f",
    "databaseURL": ""
}

pyrebase = pyrebase.initialize_app(firebaseConfig)

# firebase-admin
cred = credentials.Certificate("credentials/firebase.json")
firebase_admin.initialize_app(cred)