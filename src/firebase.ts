import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqzqZbZorYR1D-tB3hx4OldlaBAwUGWCQ",
    authDomain: "typescript-training-app.firebaseapp.com",
    projectId: "typescript-training-app",
    storageBucket: "typescript-training-app.appspot.com",
    messagingSenderId: "103555145133",
    appId: "1:103555145133:web:3632ee76e446156b185524"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const db = getFirestore();

export default app;
