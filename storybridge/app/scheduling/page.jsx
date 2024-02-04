"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Navbar from "../Navbar";
import { updateElderSchedule, isKid, updateKid, updatePoints} from "../firebase";

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

  const handleSubmit = async () => {
    try {
      // Use await when calling the async function
      console.log("submitting ", day, time);
      if(isKiddo)
      {
        await updateKid(day, time);
        await updatePoints(20);
      }
      else
      {
        await updateElderSchedule(day);
      }
    } catch (error) {
      console.error("Error submitting:", error);
    }
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

        {/* Use the async function handleSubmit as the onClick handler for the submit button */}
        <button
          onClick={handleSubmit}
          className={styles.button}
          disabled={!(day !== -1 && ((isKid && time !== -1) || !isKid))}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
