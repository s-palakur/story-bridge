// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtt-cd2Yf12fjj3T5bD9EcP3yUCUpOg7k",
  authDomain: "storybridge-f998a.firebaseapp.com",
  projectId: "storybridge-f998a",
  storageBucket: "storybridge-f998a.appspot.com",
  messagingSenderId: "90956548297",
  appId: "1:90956548297:web:d8a73a55f3542d3b89a518",
  measurementId: "G-XG7YCND9PS"
};

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// imports for firestore
import {
  getFirestore,
  doc,
  setDoc,
  Timestamp,
  collection,
  addDoc,
  updateDoc,
  query,
  where,
  getDocs,
  collectionGroup,
  deleteDoc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//function to see if the user is signed in so we can retrieve email id @s-palakur
export function getID() {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user != null) {
    // console.log(user.email);
    return user.email;
  }
  return "no user";
}

//moved some constants outside functions for fun @s-palakur
export const firestore = getFirestore(); //basically firestore


export function writeUserDoc() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      const userCollection = doc(firestore, "userCollection/" + user.email);
      if (user) {
        const docData = {
          // userid that's stored in user-doc
          user: user.uid,
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        };
        setDoc(userCollection, docData);
      }
    });
  }