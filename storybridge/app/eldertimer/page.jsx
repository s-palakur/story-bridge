'use client'

// YourPage.js
import React from "react";
import CountdownTimer from "../dashboard/CountdownTimer";
import "../dashboard/CountdownTimer.module.css"

const Timer = () => {
  // Set the target date to 7 days from now
  const targetDate = new Date(); // React's Date object
  targetDate.setDate(targetDate.getDate() + 2);

  return (
    <div>
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
};

export default Timer;