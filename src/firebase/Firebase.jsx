// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnZYCgmS2bFX91t5UfzLPZRtheEZfZgVQ",
  authDomain: "monkeybeats-v2.firebaseapp.com",
  projectId: "monkeybeats-v2",
  storageBucket: "monkeybeats-v2.firebasestorage.app",
  messagingSenderId: "26122362155",
  appId: "1:26122362155:web:77c502d890125126fff96e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);