// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXw20Unfez3x_0xzTJ-ptXvffReRR2G98",
  authDomain: "twitter-clone-dba7b.firebaseapp.com",
  projectId: "twitter-clone-dba7b",
  storageBucket: "twitter-clone-dba7b.appspot.com",
  messagingSenderId: "198019156339",
  appId: "1:198019156339:web:b5b0fdf6e086f47963dd06",
  measurementId: "G-KQTXW7DKGE"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export default db;
