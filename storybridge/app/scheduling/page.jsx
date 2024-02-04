"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Navbar from "../Navbar";
export default function Home() {
  const [day, setDay] = useState(0);
  const [time, setTime] = useState(0);
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
        <button onClick={console.log(day, time)}>submit</button>
      </div>
      f
    </div>
  );
}
