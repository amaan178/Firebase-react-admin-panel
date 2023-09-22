import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCfUku5aGnCslJq-YBa6obwepckhlWZuWQ",
  authDomain: "react-auth-crud-b28f5.firebaseapp.com",
  projectId: "react-auth-crud-b28f5",
  storageBucket: "react-auth-crud-b28f5.appspot.com",
  messagingSenderId: "890553677097",
  appId: "1:890553677097:web:a30c43d351d33f94363338",
  measurementId: "G-JBSZZQR0DB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);