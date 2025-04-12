// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCewGPMZvUZy0UxZtQhEMvmyKXzD58pCnY",
  authDomain: "rasasetu.firebaseapp.com",
  projectId: "rasasetu",
  storageBucket: "rasasetu.firebasestorage.app",
  messagingSenderId: "512069469736",
  appId: "1:512069469736:web:9704cfb7fb988863f0171d",
  measurementId: "G-72DVPBVQTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);