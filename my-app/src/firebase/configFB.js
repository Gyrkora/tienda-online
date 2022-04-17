// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCYayDGz3wUwOCnhTcKf5yezFuCqQ7y2k0",
  authDomain: "tiendatow-60873.firebaseapp.com",
  projectId: "tiendatow-60873",
  storageBucket: "tiendatow-60873.appspot.com",
  messagingSenderId: "55848869355",
  appId: "1:55848869355:web:3ba520179de5c4c11ccdae",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const getFirebaseInit = () => {
  return app;
};
