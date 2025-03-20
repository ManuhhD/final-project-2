// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtlWD5FEc2_oGbeGdakXWxT4i3LV0gEjQ",
  authDomain: "milkshakeshake-b2443.firebaseapp.com",
  projectId: "milkshakeshake-b2443",
  storageBucket: "milkshakeshake-b2443.firebasestorage.app",
  messagingSenderId: "878751236724",
  appId: "1:878751236724:web:d68618c2490dd4065e8721"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);