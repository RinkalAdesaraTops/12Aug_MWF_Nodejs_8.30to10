import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCBWWOXpayQP9OyqZyJV3w_Jte5BTwYBZI",
  authDomain: "react6mayproject.firebaseapp.com",
  projectId: "react6mayproject",
  storageBucket: "react6mayproject.appspot.com",
  messagingSenderId: "89308122385",
  appId: "1:89308122385:web:5c6ce8a9994a1e9b5a10b0",
  measurementId: "G-ZZXH9D5W0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}