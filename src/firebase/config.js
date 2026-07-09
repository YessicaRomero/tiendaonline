import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBlVOvN8vK9F5ILBFL7IfsMlvNcwtzkSZE",
    authDomain: "ecommerce-dulcehogar.firebaseapp.com",
    projectId: "ecommerce-dulcehogar",
    storageBucket: "ecommerce-dulcehogar.appspot.com",
    messagingSenderId: "119214747831",
    appId: "1:119214747831:web:a97000ae092d7f83815d32",
    measurementId: "G-8J19Q7WDB7"
  };
const app = initializeApp(firebaseConfig);
 const db = getFirestore(app)

 const auth = getAuth(app);

export {db, auth}



