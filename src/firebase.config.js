// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_REACT_APP_API_KEY}`,
  authDomain: `${import.meta.env.VITE_REACT_APP_AUTH_DOMAIN}`,
  projectId: "chroma-course",
  storageBucket: `${import.meta.env.VITE_REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${import.meta.env.VITE_REACT_APP_APP_ID}`,
  measurementId: `${import.meta.env.VITE_REACT_APP_MEASUREMENT_ID}`,
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
