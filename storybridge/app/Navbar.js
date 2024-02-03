import React from "react";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <div className={styles.main}>
      <img src="/logo.svg" alt="logo" width="100" />
      <h1>hello</h1>
      <div>Home</div>
      <div>Schedule Session</div>
      <div>Shop</div>
    </div>
  );
}
