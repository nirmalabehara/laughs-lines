// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtWfHfto2UEgNV0WjQLlBaA6iGoeqRNic",  // Your API key
  authDomain: "laughs-lines.firebaseapp.com",        // Your auth domain
  projectId: "laughs-lines",                         // Your project ID
  storageBucket: "laughs-lines.appspot.com",         // Your storage bucket
  messagingSenderId: "565223392481",                // Your messaging sender ID
  appId: "1:565223392481:web:c3f949c1c32507e50c23a0",  // Your app ID
  measurementId: "G-986VDLXPXY"                     // Your measurement ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Enable popup authentication
provider.setCustomParameters({ prompt: "select_account" });

export { auth, provider, signInWithPopup };
