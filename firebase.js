// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTFZNgsghEGcpDXEtjMfLtPQH_eRE67lI",
  authDomain: "constella-db291.firebaseapp.com",
  projectId: "constella-db291",
  storageBucket: "constella-db291.firebasestorage.app",
  messagingSenderId: "75243768458",
  appId: "1:75243768458:web:b5d013f86554b5f690bb73",
  measurementId: "G-0GCRPYSDD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);