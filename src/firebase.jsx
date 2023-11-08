import { initializeApp } from "firebase/app"; 
import { getAuth } from 'firebase/auth';  
import { getFirestore } from 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyBJi7181FdczAnNZUcWlfkxMQ3H01oMjpw",
  
    authDomain: "e-commerce-sign.firebaseapp.com",
  
    projectId: "e-commerce-sign",
  
    storageBucket: "e-commerce-sign.appspot.com",
  
    messagingSenderId: "668924587623",
  
    appId: "1:668924587623:web:a05384b00a543b68426ec2"
  
};
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) 
export const db = getFirestore(app)

/* 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4rLxYG1AS5g1vG1b4tqh7jhjCFBh5xGY",
  authDomain: "e-commerce-demo-6c28c.firebaseapp.com",
  projectId: "e-commerce-demo-6c28c",
  storageBucket: "e-commerce-demo-6c28c.appspot.com",
  messagingSenderId: "574901174067",
  appId: "1:574901174067:web:60e3b32fd281a43d42c846"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

*/