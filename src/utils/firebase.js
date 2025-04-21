// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuPsqJUy7NJnJFzzvOAVYHHkEIC6dMR_M",
  authDomain: "netflixgpt-2bffa.firebaseapp.com",
  projectId: "netflixgpt-2bffa",
  storageBucket: "netflixgpt-2bffa.firebasestorage.app",
  messagingSenderId: "106882111793",
  appId: "1:106882111793:web:99b2f27c4a1a0b66c77810",
  measurementId: "G-3WKPP0EE4G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
