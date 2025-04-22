// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDBjoVIjPqUqlEEO6W83En_c5A0Dc8l7E",
  authDomain: "netflixgpt-4e5fc.firebaseapp.com",
  projectId: "netflixgpt-4e5fc",
  storageBucket: "netflixgpt-4e5fc.firebasestorage.app",
  messagingSenderId: "931377719405",
  appId: "1:931377719405:web:bbe56be51742ba2f02b764",
  measurementId: "G-DKF3FVRL6T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
