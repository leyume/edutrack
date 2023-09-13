import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, onAuthStateChanged, signOut };
