// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: '${process.env.REACT_APP_API_KEY}',
    authDomain: "mecmatrimony-akd.firebaseapp.com",
    projectId: "mecmatrimony-akd",
    storageBucket: "mecmatrimony-akd.appspot.com",
    messagingSenderId: "580011554962",
    appId: "1:580011554962:web:97c869d7d2a64c5497ce4b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);  