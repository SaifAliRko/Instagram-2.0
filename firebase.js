// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUsf0XDfgC3pxqEb_mj5YJkeA7401uFbU",
    authDomain: "instagram-clone-4426a.firebaseapp.com",
    projectId: "instagram-clone-4426a",
    storageBucket: "instagram-clone-4426a.appspot.com",
    messagingSenderId: "70924718828",
    appId: "1:70924718828:web:17236956f3fd17537f0bc9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };