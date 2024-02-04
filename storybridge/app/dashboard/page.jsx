"use client";
import React from "react";
import styles from "./page.module.css";
import Navbar from "../Navbar";
import Dash from "./Dash";
// import Timer from "./Timer";
import Link from "next/link";
import CountdownTimer from "./CountdownTimer";

export default function Home() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);
  const hasSession = false;
  // TODO: dynamically set

  return (
    <div className={styles.main}>
      <Navbar pageName="dashboard" />
      {hasSession && <CountdownTimer targetDate={targetDate} />}
      {!hasSession && (
        <div className={styles.container}>
          <h1>You have no upcoming story sessions.</h1>
          <Link href="/scheduling">
            <div className={styles.accent}>Schedule one now!</div>
          </Link>
        </div>
      )}
      <Dash />
    </div>
  );
}
