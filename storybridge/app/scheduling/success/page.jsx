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
        <h1>A story is on its way!</h1>
        <h2>We will send you an email if someone has availability.</h2>
      </div>
    </div>
  );
}
