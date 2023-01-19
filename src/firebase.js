import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANueMRG-z5btDaytkzqHS-NfH4_tuuav8",
  authDomain: "chat-app-dc0c1.firebaseapp.com",
  projectId: "chat-app-dc0c1",
  storageBucket: "chat-app-dc0c1.appspot.com",
  messagingSenderId: "49097748759",
  appId: "1:49097748759:web:61a34104e809e08a2e8752"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
