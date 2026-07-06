import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAi0yoqEuwwui6lItbS1g6uUShEPX5Phas",
  authDomain: "truthandpraisechurch.firebaseapp.com",
  projectId: "truthandpraisechurch",
  storageBucket: "truthandpraisechurch.firebasestorage.app",
  messagingSenderId: "764723618419",
  appId: "1:764723618419:web:3b83c218904a067656c006",
  measurementId: "G-8H8T7560LL"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
