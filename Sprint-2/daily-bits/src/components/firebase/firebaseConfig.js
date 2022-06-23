// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAPHhOYAfvGfNmF2hkK0R1D1ywDsJYKzMc",
  authDomain: "dailybitsauth.firebaseapp.com",
  projectId: "dailybitsauth",
  storageBucket: "dailybitsauth.appspot.com",
  messagingSenderId: "130639029516",
  appId: "1:130639029516:web:59d8398c6b0bbef713d529"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
