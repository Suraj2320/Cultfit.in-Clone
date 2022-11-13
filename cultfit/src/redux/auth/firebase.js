

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import { LOGIN_SUCCESS } from "./auth.types";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-1iQsLlg52rKUMC5jvXuNh8LulT3_lVA",
  authDomain: "auth-a7e8f.firebaseapp.com",
  projectId: "auth-a7e8f",
  storageBucket: "auth-a7e8f.appspot.com",
  messagingSenderId: "69368487539",
  appId: "1:69368487539:web:3c6ace35e7b07224cc9406"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
// export const provider = new GoogleAuthProvider();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle=()=>(dispatch)=>{
    signInWithPopup(auth,provider).then((res)=>{
console.log(res)
dispatch({type:LOGIN_SUCCESS,payload:res.user.accessToken})
    })
    .catch((error)=>console.log(error))
}