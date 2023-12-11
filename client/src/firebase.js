// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-bb186.firebaseapp.com",
  projectId: "mern-estate-bb186",
  storageBucket: "mern-estate-bb186.appspot.com",
  messagingSenderId: "278120188979",
  appId: "1:278120188979:web:d1ffb9b92e4024bd8fa746"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);