// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_LrZtnH4jigyY2zR9UajRJGMs1nCnspc",
  authDomain: "instagram-clone-6f3e6.firebaseapp.com",
  projectId: "instagram-clone-6f3e6",
  storageBucket: "instagram-clone-6f3e6.appspot.com",
  messagingSenderId: "781572004103",
  appId: "1:781572004103:web:751a1635613ca292ea4da2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();