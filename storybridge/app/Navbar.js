import React from "react";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <img src="/logo.svg" alt="logo" width="100" />
        <h1 style={{ "font-weight": "normal" }}>Home</h1>
        <h1 style={{ "font-weight": "normal" }}>Schedule Session</h1>
        <h1 style={{ "font-weight": "normal" }}>Shop</h1>
      </div>
      <div className={styles.right}>
        <img src="/coin.svg" alt="coin" width="50" />
        <img src="/profile.svg" alt="profile" width="50" />
      </div>
    </div>
  );
}
