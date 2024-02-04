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
  getDoc,
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

export const firestore = getFirestore(); //basically db

////////////
export async function isKid() {
  const userDocRef = doc(firestore, "userCollection", getID());
  console.log("getting the IS KID");
  try {
    const userDocSnapshot = await getDoc(userDocRef);
    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();
      const userType = userData.type;
      // Check if the user type is set to "Kid"
      if (userType === "Kid") {
        console.log("Is a kid!");
        return true; // User is a kid
      }
    }
    return false; // User is not a kid or document doesn't exist
  } catch (error) {
    console.error("Error checking user type:", error);
    return false; // Handle error gracefully, returning false for simplicity
  }
}

export async function getPoints() {
  const userDocRef = doc(firestore, "userCollection", getID());
  try {
    const userDocSnapshot = await getDoc(userDocRef);
    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();
      const userType = userData.type;
      // Check if the user type is set to "Kid"
      if (userType === "Kid") {
        return userType.points; // User is a kid
      }
    }
    return -1; // User is not a kid or document doesn't exist
  } catch (error) {
    console.error("Error checking user type:", error);
    return false; // Handle error gracefully, returning false for simplicity
  }
}

///////

/////////////////
// ADDING A KID TO FIRESTORE
export async function addKidToFirestore() {
  const userDocRef = doc(firestore, "userCollection", getID());

  // Assume you have an event object to add
  const kid = {
    // Your event data here
    id: getID(),
    type: "Kid",
    day: 0,
    hour: 0,
    points: 0,
  };

  // Set the event data directly in the user's document
  await setDoc(userDocRef, { user: kid }, { merge: true });
}
/////////////////

/////////////////
// ADDING AN ELDER USER
export async function addElderToFirestore() {
  const userDocRef = doc(firestore, "userCollection", getID());
  // Assume you have an event object to add
  const elder = {
    // Your event data here
    id: getID(),
    type: "Elder",
    days: [],
    kids: [],
  };

  await setDoc(userDocRef, { user: elder }, { merge: true });
}

export async function updateElderSchedule(days) {
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

    // Set the elder data directly in the user's document
    await setDoc(userDocRef, { days: days, kids: kids });

    console.log("Elder document updated with kids");
  } catch (error) {
    console.error("Error updating elder document:", error);
  }
}
//////////////////////////////////
// UPDATE KID

export async function updateKid(day, hour) {
  try {
    const userDocRef = doc(firestore, "userCollection", getID());

    // Assume you have an event object to add
    await updateDoc(userDocRef, { day: day, hour: hour });
    console.log("Kid schedule updated.");
  } catch (error) {
    console.error("Error updating kid document:", error);

  }

}
/////////////////


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
    await updateDoc(userDocRef, {points: newPointsValue});

    console.log("Points updated successfully");
  } catch (error) {
    console.error("Error updating points:", error);
  }
}

//////////////////////////////////



