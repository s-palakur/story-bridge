"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Navbar from "../Navbar";
import { addKidToFirestore } from "../firebase";

export default function Home() {
  const [day, setDay] = useState(0);
  const [time, setTime] = useState(0);

  const handleSubmit = () => {
    // Call the function to add the kid to Firestore with the selected day and time
    addKidToFirestore(day, time);
  };

  return (
    <div>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.heading}>
          What day would you like to schedule for?
        </div>
        <button
          onClick={() => {
            setDay(7);
          }}
        >
          Sunday
        </button>
        <button
          onClick={() => {
            setDay(1);
          }}
        >
          Monday
        </button>
        <div className={styles.heading}>What hour are you free?</div>
        <button
          onClick={() => {
            setTime(3);
          }}
        >
          3pm
        </button>
        <br />
        {/* Use handleSubmit function as the onClick handler for the submit button */}
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {/* Remove unnecessary 'f' */}
    </div>
  );
}
