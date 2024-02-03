import React from "react";
import styles from "./Landing.module.css";
export default function Landing() {
  return (
    <div className={styles.main}>
      <div className={styles.logoContainer}>
      <img src="/logo.svg" alt="logo" className={styles.logo} />
            <p  className={styles.description}>Connecting generations, one story at a time.</p>
            <p className={styles.text}>We connect children with elders to foster reading time. <br></br>Sign up to start reading today!</p>
            <button className={styles.button}>Sign Up/Log In</button>

      </div>
    </div>
  );
}
