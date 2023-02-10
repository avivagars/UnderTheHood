// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCChvh1y3UFXxgjczYFj2yo4cX_wYGI5kQ",
  authDomain: "under-the-hood-a40cc.firebaseapp.com",
  projectId: "under-the-hood-a40cc",
  storageBucket: "under-the-hood-a40cc.appspot.com",
  messagingSenderId: "529643374783",
  appId: "1:529643374783:web:376acbb7d8542d36065e0a",
  measurementId: "G-V7ERLS36F3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();