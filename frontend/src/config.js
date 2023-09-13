import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSg4qAG-X5PahwHeETXi9eS89VKuZPLtg",
  authDomain: "edutrackz.firebaseapp.com",
  projectId: "edutrackz",
  storageBucket: "edutrackz.appspot.com",
  messagingSenderId: "605470053998",
  appId: "1:605470053998:web:092058e073da3251e4b87f",
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword };
