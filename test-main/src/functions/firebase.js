// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1MuXnrhIyGsehwID03f5dL0Al9vJczYQ",
  authDomain: "ekaayam-fe09a.firebaseapp.com",
  projectId: "ekaayam-fe09a",
  storageBucket: "ekaayam-fe09a.appspot.com",
  messagingSenderId: "419774277630",
  appId: "1:419774277630:web:e4f44c3e5f2b2cad6b42af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app); 

// Initialize Firestore and get a reference to the service
export const db = getFirestore(app); 

export default app;
