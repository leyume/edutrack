import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase";
<<<<<<< HEAD
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
=======
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
>>>>>>> 4230997afb2e5b2242259cc3e5ae2627ddb33c28

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, onAuthStateChanged, signOut };
