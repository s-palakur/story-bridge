"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Navbar from "../Navbar";
import { addKidToFirestore, isKid } from "../firebase";

export default function Home() {
  const [day, setDay] = useState(-1);
  const [time, setTime] = useState(-1);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const times = [
    "-",
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
    "8PM",
    "9PM",
  ];
  const isKiddo = isKid();

  // submits two numbers, day ranges 1-7, and time ranges 9-21 for 9AM to 9PM
  const handleSubmit = () => {
    // Call the function to add the kid to Firestore with the selected day and time
    console.log("submitting ", day, time);
    addKidToFirestore(day, time);
  };

  return (
    <div>
      <Navbar pageName="scheduling" />
      <div className={styles.main}>
        <div className={styles.heading}>
          What day would you like to schedule for?
        </div>
        <div className={styles.dayWrapper}>
          {days.map((name, index) => (
            <div
              className={styles.day}
              key={index}
              style={{
                backgroundColor: index === day - 1 ? "#FFD37B" : "transparent",
              }}
              onClick={() => {
                setDay(index + 1);
              }}
            >
              {name}
              <br />2 / 1{/* TODO: dynamically show date */}
            </div>
          ))}
        </div>
        {isKiddo && (
          <div className={styles.mainKid}>
            <div className={styles.heading}>What hour are you free?</div>
            <h1>Select one.</h1>
            <select
              className={styles.select}
              value={time}
              onChange={(event) => {
                setTime(event.target.value);
              }}
            >
              {times.map((name, index) => (
                <option key={index} value={index + 8}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Use handleSubmit function as the onClick handler for the submit button */}
        <button
          onClick={handleSubmit}
          className={styles.button}
          disabled={!(day != -1 && ((isKid && time != -1) || !isKid))}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
