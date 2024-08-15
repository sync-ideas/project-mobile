// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Este import es correcto para Firestore
// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyDmp_rA9qNdETunjm7zMmYEz_QZuTMG_0o",

  authDomain: "asistencias-e9b11.firebaseapp.com",

  projectId: "asistencias-e9b11",

  storageBucket: "asistencias-e9b11.appspot.com",

  messagingSenderId: "242869192190",

  appId: "1:242869192190:web:fb21ca23a686021ca3ecaf"

};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);