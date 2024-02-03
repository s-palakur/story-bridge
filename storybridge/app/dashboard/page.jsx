import React from "react";
// import { Link } from "react-router-dom";
import styles from "./page.module.css";
import Navbar from "../Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>
        You have 1 upcoming story session with Swetha on 3PM Sunday, Feb 4th,
        2024.
      </h1>
      <div className={styles.Countdown}>25 hours, 4 minutes</div>
      <h1>
        until reading with Swetha! Check back here to join the video call.
      </h1>
    </div>
  );
}
