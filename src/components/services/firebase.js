// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqX27JJE6Lb7-1-uWsfUu0joDn_FxU0SQ",
  authDomain: "ecommercecalzadoreact.firebaseapp.com",
  projectId: "ecommercecalzadoreact",
  storageBucket: "ecommercecalzadoreact.appspot.com",
  messagingSenderId: "921050844694",
  appId: "1:921050844694:web:263537932bc0477942af37",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
