// CountdownTimer.js
import React, { useState, useEffect } from "react";
import styles from "./CountdownTimer.module.css";
import TextToSpeechButton from "./tts.js"



const CountdownTimer = () => {
  const targetDate = new Date("February 6, 2024 16:00:00").getTime(); // Target date and time: 4 PM, February 6, 2024

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
  }, []);


  const openGoogleMeet = () => {
    // Replace 'YOUR_MEET_LINK' with the actual Google Meet link
    const meetLink = 'https://meet.google.com/ist-tcxg-epc';
    window.open(meetLink, '_blank');
  };

  return (

    <div id="readable" className={styles.countdownContainer}>
      <TextToSpeechButton />
      <h1>You've been matched to read with Sahiti for 4PM Tuesday, Feb 6th, 2024.</h1>
      <div className={styles.timeDisplay}>
        <span style={{ fontWeight: 600 }}>{timeRemaining.days} days </span>
        <span style={{ fontWeight: 600 }}>{timeRemaining.hours} hr </span>
        <span style={{ fontWeight: 600 }}>{timeRemaining.minutes} min </span>
        <span style={{ fontWeight: 600 }}>{timeRemaining.seconds} sec </span>
      </div>
      <h1> until reading time!</h1>

      {/* Button to open Google Meet */}
      <button onClick={openGoogleMeet} className={styles.button}>
      <img className={styles.googleMeetLogo} src="/google_meet_logo.png" alt="Google Meet Logo" />
      <h1>CLICK HERE</h1>
      </button>
    </div>
  );
};

export default CountdownTimer;
