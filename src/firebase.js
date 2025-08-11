// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOgT0LDK_3MDBoCPAC9PKfMjbh4jWQVeI",
  authDomain: "portifolio-891c7.firebaseapp.com",
  projectId: "portifolio-891c7",
  storageBucket: "portifolio-891c7.firebasestorage.app",
  messagingSenderId: "340331390327",
  appId: "1:340331390327:web:887a21286b39395b0c2d72",
  measurementId: "G-T184V0BSGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore=getFirestore(app)
const analytics = getAnalytics(app);
export {firestore,analytics};
