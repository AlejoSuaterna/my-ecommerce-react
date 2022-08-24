// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzxTEa7nMyonOIAxskzrQFGpQws0JUTCE",
  authDomain: "my-ecommerce-react-480c4.firebaseapp.com",
  projectId: "my-ecommerce-react-480c4",
  storageBucket: "my-ecommerce-react-480c4.appspot.com",
  messagingSenderId: "231007334356",
  appId: "1:231007334356:web:bf3acbb43ff39e3affb041"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const DB = getFirestore(app);