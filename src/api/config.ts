// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDwAuuwZe6ijnoaVWHQi7nYni2ue4DMuOs",
    authDomain: "tylerjones-site.firebaseapp.com",
    projectId: "tylerjones-site",
    storageBucket: "tylerjones-site.appspot.com",
    messagingSenderId: "776763066833",
    appId: "1:776763066833:web:364c2471dc165fce70f8f0",
    measurementId: "G-VWLVT95F1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);