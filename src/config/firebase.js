// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARZ00OGddZfyvpo1QdonYcsdY7wlDwTIs",
  authDomain: "ecomerce-store-41be8.firebaseapp.com",
  projectId: "ecomerce-store-41be8",
  storageBucket: "ecomerce-store-41be8.firebasestorage.app",
  messagingSenderId: "988674781567",
  appId: "1:988674781567:web:e50fd22b4c680b22c3aa4a",
  measurementId: "G-6V4QCTYK3D"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { analytics, auth, firestore};
