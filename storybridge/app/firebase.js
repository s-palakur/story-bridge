// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);