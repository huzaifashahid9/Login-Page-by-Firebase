// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtpoTN4khFO1bVh4QM0hRVYcU0xx8e6V8",
    authDomain: "login-page-2d77f.firebaseapp.com",
    projectId: "login-page-2d77f",
    storageBucket: "login-page-2d77f.firebasestorage.app",
    messagingSenderId: "167803649139",
    appId: "1:167803649139:web:c6d982c3903ec03b537e06"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();

export{
    auth,createUserWithEmailAndPassword,signInWithEmailAndPassword
}