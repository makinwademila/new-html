// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJ-BRaEKEIX8dMrzveEtqXXYNbw1GYhpw",
    authDomain: "new-html-a4c3a.firebaseapp.com",
    projectId: "new-html-a4c3a",
    storageBucket: "new-html-a4c3a.firebasestorage.app",
    messagingSenderId: "733388529190",
    appId: "1:733388529190:web:637d3f9aab8fa0830190e7",
    measurementId: "G-FZNRCB7ENZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);