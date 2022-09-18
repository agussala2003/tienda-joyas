// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS6f76ZJ23LMV3HST5XnklCSCMrDVmq34",
  authDomain: "bill-commerce.firebaseapp.com",
  projectId: "bill-commerce",
  storageBucket: "bill-commerce.appspot.com",
  messagingSenderId: "967315056858",
  appId: "1:967315056858:web:eb0bbf23cddd023a149de3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
