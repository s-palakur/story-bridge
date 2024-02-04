"use client"

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Navbar from "../Navbar";
import { useRouter } from "next/navigation";
import { updateElderSchedule, isKid, updateKid, updatePoints } from "../firebase";

export default function Home() {
  const [day, setDay] = useState(-1);
  const [time, setTime] = useState(-1);
  const [isKiddo, setIsKiddo] = useState(false);
  const router = useRouter();

  // Define the days and times arrays
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await isKid();
        setIsKiddo(result);
      } catch (error) {
        console.error("Error checking if user is a kid:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async () => {
    try {
      console.log("submitting ", day, time);
      if (isKiddo) {
        await updateKid(day, time);
        // await updatePoints(20);
      } else {
        await updateElderSchedule(day);
      }
      router.push("/dashboard");
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
              <br />2 / {5+index}
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

        <button
          onClick={handleSubmit}
          className={styles.button}
          disabled={!(day !== -1 && ((isKiddo && time !== -1) || !isKiddo))}
        >
           <h1>{isKiddo ? "Submit" : "CLICK HERE to Submit"}</h1>
        </button>
      </div>
    </div>
  );
}
