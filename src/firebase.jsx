import { initializeApp } from "firebase/app"; 
import { getAuth } from 'firebase/auth';  
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