// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCl0yeL5LKdxYNeyEV-CBosLnOIWgoGW2g",
  authDomain: "fir-auth-b13bb.firebaseapp.com",
  projectId: "fir-auth-b13bb",
  storageBucket: "fir-auth-b13bb.appspot.com",
  messagingSenderId: "445995398018",
  appId: "1:445995398018:web:431f6d0b07308b3d2f159b",
  measurementId: "G-LHDLGC751G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
