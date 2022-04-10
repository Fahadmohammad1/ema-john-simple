// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAygUvG8HdyrafBs9KPl19yAZ_dKDGPZo8",
  authDomain: "ema-john-simple-e03c8.firebaseapp.com",
  projectId: "ema-john-simple-e03c8",
  storageBucket: "ema-john-simple-e03c8.appspot.com",
  messagingSenderId: "861579173553",
  appId: "1:861579173553:web:a83a9a80ae0e629cc64c90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
