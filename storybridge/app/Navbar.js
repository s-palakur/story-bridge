import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { isKid } from "./firebase"

export default function Navbar() {
  // Example boolean function isKid

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <img src="/logo.svg" alt="logo" width="100" />
        <Link href="/dashboard">
          <h1 style={{ fontWeight: "normal" }}>Home</h1>
        </Link>
        <Link href="/scheduling">
          <h1 style={{ fontWeight: "normal" }}>Schedule Session</h1>
        </Link>
        {isKid() && <h1 style={{ fontWeight: "normal" }}>Shop</h1>}
      </div>
      <div className={styles.right}>
        {isKid() && <img src="/coin.svg" alt="coin" width="50" />}
        <img src="/profile.svg" alt="profile" width="50" />
      </div>
    </div>
  );
}

