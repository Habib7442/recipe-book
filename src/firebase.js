import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/database";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDsmtHCQkFcSMc84AHED9ZNZepARzvT_fQ",
  authDomain: "recipe-book-a53f4.firebaseapp.com",
  projectId: "recipe-book-a53f4",
  storageBucket: "recipe-book-a53f4.appspot.com",
  messagingSenderId: "595319933097",
  appId: "1:595319933097:web:c7965b25e9f44e95c441b8",
});

export const auth = app.auth();
export const db = getFirestore();
export const storage = getStorage(app);
export default app;
