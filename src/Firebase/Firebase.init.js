// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOCgg2OmK7sDFtCTD_jjZ-KOVmudzlf64",
  authDomain: "assignment-10-visa.firebaseapp.com",
  projectId: "assignment-10-visa",
  storageBucket: "assignment-10-visa.firebasestorage.app",
  messagingSenderId: "236077577366",
  appId: "1:236077577366:web:375cfa8add5017c4bdfeb7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
