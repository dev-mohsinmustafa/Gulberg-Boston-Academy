 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDz89VwBhI5Sdz4BULbUhrnqP9cerSUZF8",
  authDomain: "abu-hurariah.firebaseapp.com",
  projectId: "abu-hurariah",
  storageBucket: "abu-hurariah.appspot.com",
  messagingSenderId: "115977296669",
  appId: "1:115977296669:web:5160d14b1a806015751ff4",
  measurementId: "G-82PLR5NF7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };

