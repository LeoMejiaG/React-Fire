import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBLjBpWHyZ4_s4HpAYonQVzZxJVeoyOjzE",
  authDomain: "react-firebase-a179f.firebaseapp.com",
  projectId: "react-firebase-a179f",
  storageBucket: "react-firebase-a179f.appspot.com",
  messagingSenderId: "858926354285",
  appId: "1:858926354285:web:35c9386c55577231e11464",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
