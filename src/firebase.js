// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOtUd484mgbCmk8gC14pwgeeLlu78pzwo",
  authDomain: "testproject-a2a25.firebaseapp.com",
  projectId: "testproject-a2a25",
  storageBucket: "testproject-a2a25.appspot.com",
  messagingSenderId: "857658458255",
  appId: "1:857658458255:web:e78808ec14cd6a897130fa",
  measurementId: "G-JPTXM3G973",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore;
