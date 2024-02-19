// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import{getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBDDA8Jc3PDTF3omn032WWWvAS0CRH0hnA",
  authDomain: "insta-clone-d1e19.firebaseapp.com",
  projectId: "insta-clone-d1e19",
  storageBucket: "insta-clone-d1e19.appspot.com",
  messagingSenderId: "570321324716",
  appId: "1:570321324716:web:84197ea872e206bdc2ed09",
  measurementId: "G-BPBE1WTL05"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage};