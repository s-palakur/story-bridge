// CountdownTimer.js
import React, { useState, useEffect } from "react";
import styles from "./Timer.module.css"; 

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
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
      <h2>Countdown Timer</h2>
      <div className={styles.timeDisplay}>
        <span>{timeRemaining.days} days</span>
        <span>{timeRemaining.hours} hours</span>
        <span>{timeRemaining.minutes} minutes</span>
        <span>{timeRemaining.seconds} seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
