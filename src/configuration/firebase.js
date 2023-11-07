import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBPbiAJ1hNoYV7Nz30VEgjr8vyAdI1NmDc",
  authDomain: "react-firebase-crud-auth-3db22.firebaseapp.com",
  projectId: "react-firebase-crud-auth-3db22",
  storageBucket: "react-firebase-crud-auth-3db22.appspot.com",
  messagingSenderId: "473002701328",
  appId: "1:473002701328:web:aee3a7fc4326a7970fd095"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Auth configure
export const auth = getAuth(app);

export const db = getFirestore(app);
