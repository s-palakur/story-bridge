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
    <h1 style={{ fontSize: "200px" }}>A story is on its way!</h1>
    <h2 style={{ fontSize: "150px" }}>Click HOME to check availability.</h2>
  </div>
</div>
  );
}
