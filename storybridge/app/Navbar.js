import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <img src="/logo.svg" alt="logo" width="100" />
        <Link href="/dashboard">
          <h1 style={{ "font-weight": "normal" }}>Home</h1>
        </Link>
        <Link href="/scheduling">
          <h1 style={{ "font-weight": "normal" }}>Schedule Session</h1>
        </Link>
        <h1 style={{ "font-weight": "normal" }}>Shop</h1>
      </div>
      <div className={styles.right}>
        <img src="/coin.svg" alt="coin" width="50" />
        <img src="/profile.svg" alt="profile" width="50" />
      </div>
    </div>
  );
}
