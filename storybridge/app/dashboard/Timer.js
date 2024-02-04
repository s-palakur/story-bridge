'use client'

// YourPage.js
import React from "react";
import CountdownTimer from "./CountdownTimer";
import "./Timer.module.css"

const Timer = () => {
  // Set the target date to 7 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  return (
    <div>
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
};

export default Timer;
