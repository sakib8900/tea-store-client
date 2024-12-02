// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCry9qWU9OC3sFA1iojDlDUopAcm8ItDOc",
  authDomain: "coffee-store-305f6.firebaseapp.com",
  projectId: "coffee-store-305f6",
  storageBucket: "coffee-store-305f6.firebasestorage.app",
  messagingSenderId: "232498904482",
  appId: "1:232498904482:web:ac6bf6e9ba090ed5f506fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)