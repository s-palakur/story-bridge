import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/compat/app";
// Required for side-effects
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
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";


import { onAuthStateChanged } from "firebase/auth";

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


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = getFirestore(); //basically db

/////////////////
// ADDING A KID TO FIRESTORE
export async function addKidToFirestore(day, hour) {
  const userDocRef = doc(firestore, "userCollection", getID());

  // Assume you have an event object to add
  const kidObj = {
    // Your event data here
    id: getID(),
    type: "Kid",
    day: day,
    hour: hour,
    points: 0,
  };

  // Set the event data directly in the user's document
  await setDoc(userDocRef, { event: kidObj }, { merge: true });
}
/////////////////

/////////////////
// ADDING AN ELDER USER
export async function addElderToFirestore(days) {
  const userDocRef = doc(firestore, "userCollection", getID());

  try {
    // Query to find "Kid" documents with matching days
    const kidQuery = query(
      collection(firestore, "userCollection", getID()),
      where("type", "==", "Kid"),
      where("day", "in", days)
    );

    // Execute the query
    const kidQuerySnapshot = await getDocs(kidQuery);

    // Collect kid IDs
    const kids = [];
    kidQuerySnapshot.forEach((kidDoc) => {
      const kidData = kidDoc.data();
      kids.push(kidData.id); // Replace "id" with the actual field name containing the kid's ID
    });

    // Assume you have an elder object to add
    const elderData = {
      type: "Elder",
      day: days,
      kids: kids,
    };

    // Set the elder data directly in the user's document
    await setDoc(userDocRef, elderData, { merge: true });

    console.log("Elder document updated with kids");
  } catch (error) {
    console.error("Error updating elder document:", error);
  }
}
//////////////////////////////////

//////////////////////////////////
export async function updatePointsBy100() {
  const userDocRef = doc(firestore, 'userCollection', getID());

  try {
    // Get the existing user document data
    const userDocSnapshot = await getDoc(userDocRef);
    const userData = userDocSnapshot.data();

    // Check if the "points" field already exists
    const currentPoints = userData && userData.points ? userData.points : 0;

    // Calculate the new points value by adding 100
    const newPointsValue = currentPoints + 100;

    // Update the "points" field in the user's document
    await updateDoc(userDocRef, {
      points: newPointsValue,
    });

    console.log("Points updated successfully");
  } catch (error) {
    console.error("Error updating points:", error);
  }
}

//////////////////////////////////



