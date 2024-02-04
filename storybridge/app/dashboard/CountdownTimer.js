// CountdownTimer.js
import React, { useState, useEffect } from "react";
import styles from "./CountdownTimer.module.css";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className={styles.countdownContainer}>
      <h1>
        You have an upcoming story session with Swetha on 3PM Sunday, Feb 4th,
        2024.
      </h1>
      <div className={styles.timeDisplay}>
        <span style={{ fontWeight: 600 }}>{timeRemaining.days} days</span>
        <span style={{ fontWeight: 600 }}>{timeRemaining.hours} hr</span>
        <span style={{ fontWeight: 600 }}>{timeRemaining.minutes} min</span>
        <span style={{ fontWeight: 600 }}>{timeRemaining.seconds} sec</span>
      </div>
      <h1>
        until reading with Swetha! Check back here to join the video call.
      </h1>
    </div>
  );
};

export default CountdownTimer;
