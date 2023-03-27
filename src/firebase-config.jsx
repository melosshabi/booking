// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSL-lj1EFQZhWbxcQ8kLx70H7eKqrKe2o",
  authDomain: "booking-15a0f.firebaseapp.com",
  projectId: "booking-15a0f",
  storageBucket: "booking-15a0f.appspot.com",
  messagingSenderId: "375275740498",
  appId: "1:375275740498:web:538d5263dfd6a88cc4ae8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore()
export const storage = getStorage()