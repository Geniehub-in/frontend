import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  //config
  apiKey: "AIzaSyABLDvXJH3-k2TQ6YkxR_Fo7_rINuYOTRs",
  authDomain: "geniehubintern.firebaseapp.com",
  projectId: "geniehubintern",
  storageBucket: "geniehubintern.appspot.com",
  messagingSenderId: "546849806305",
  appId: "1:546849806305:web:0ba3b86fa51ba75e1ce4a0",
  measurementId: "G-WQ8RGJKZLQ",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
