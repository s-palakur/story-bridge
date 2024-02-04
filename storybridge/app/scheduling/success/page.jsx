"use client";
import React from "react";
import styles from "./page.module.css";
import Navbar from "../../Navbar";
// import "../../global.css";

export default function Home() {
  return (
    <div>
      <Navbar pageName="scheduling" />
      <div className={styles.main}>
        <div className={styles.title}>A story is on its way!</div>
        <div className={styles.subtitle}>
          We will send you an email if someone has availability.
        </div>
      </div>
    </div>
  );
}
