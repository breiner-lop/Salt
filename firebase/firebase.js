// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlHc2klrrAtFOBQnweeNsC7l3AIoFI2os",
  authDomain: "salt-a218f.firebaseapp.com",
  projectId: "salt-a218f",
  storageBucket: "salt-a218f.appspot.com",
  messagingSenderId: "948531063307",
  appId: "1:948531063307:web:a29973e2c3fc916c68b50e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//firestore
export const firestore = getFirestore(app)