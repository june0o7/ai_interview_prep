// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9qR0tF8KEl4Fkvv2nObhPRMTXGbBl0rI",
    authDomain: "prepwise-99726.firebaseapp.com",
    projectId: "prepwise-99726",
    storageBucket: "prepwise-99726.firebasestorage.app",
    messagingSenderId: "708019937803",
    appId: "1:708019937803:web:d212e9f76270bbef865d0e",
    measurementId: "G-N5PCCNMSGL"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig) :getApp();
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);