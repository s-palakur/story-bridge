"use client";
import React from "react";
// import { Link } from "react-router-dom";
import styles from "./page.module.css";
import Navbar from "../Navbar";
import Dash from "./Dash";
// import Timer from "./Timer";
import CountdownTimer from "./CountdownTimer";

export default function Home() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);
  return (
    <div className={styles.main}>
      <Navbar pageName="dashboard" />
      <CountdownTimer targetDate={targetDate} />
      <Dash />
    </div>
  );
}
