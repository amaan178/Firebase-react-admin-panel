// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
export const auth = getAuth();