// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwIbNXGBd6djXM8C7ZICgIoLvD2LFJNBY",
  authDomain: "ecourt-reg.firebaseapp.com",
  projectId: "ecourt-reg",
  storageBucket: "ecourt-reg.appspot.com",
  messagingSenderId: "1048114656169",
  appId: "1:1048114656169:web:368e99e68d747da2decab8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);