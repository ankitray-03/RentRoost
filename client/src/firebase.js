// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realstate-f6fe1.firebaseapp.com",
  projectId: "realstate-f6fe1",
  storageBucket: "realstate-f6fe1.appspot.com",
  messagingSenderId: "223991121342",
  appId: "1:223991121342:web:618dfdabf29458ea84a5ef",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
