import React from "react";
import styles from "./Dash.module.css";
export default function Dash() {
  return (
    <div className={styles.main}>
      <div className={styles.logoContainer}>
      <p  className={styles.description}>I am a...</p>
      <div className={styles.buttonContainer}>
          <button className={styles.button}>Kid</button>
          <button className={styles.button}>Elder</button>
        </div>
        <div className={styles.nextContainer}>
      <button className={styles.next}> Next<span>&#10230;</span></button>
      </div>
      </div></div>
  );
}
