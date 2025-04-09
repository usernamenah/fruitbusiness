import { getAuth  } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjOI7wdZAFXuEeuU08eqiU3ZDKaSDwt5g",
  authDomain: "phoneverification-b2ce2.firebaseapp.com",
  projectId: "phoneverification-b2ce2",
  storageBucket: "phoneverification-b2ce2.firebasestorage.app",
  messagingSenderId: "574489939512",
  appId: "1:574489939512:web:3861f25a2bff20bc8ba0cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);