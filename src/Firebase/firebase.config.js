// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATFdAUJvhcSaVBJKDa_ZHuGvLDESuCADg",
  authDomain: "dragon-news-breaking-bcb5f.firebaseapp.com",
  projectId: "dragon-news-breaking-bcb5f",
  storageBucket: "dragon-news-breaking-bcb5f.firebasestorage.app",
  messagingSenderId: "640466716833",
  appId: "1:640466716833:web:8f5a09e8ad4231a97cc8e0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
