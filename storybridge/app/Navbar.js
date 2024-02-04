import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { isKid } from "./firebase";

export default function Navbar({ pageName = "Home" }) {
  // Determine if the current user is a kid
  const kid = isKid(); // Example boolean function isKid

  // Function to determine the style of a link
  const getLinkStyle = (linkName) => {
    return {
      fontWeight: "normal",
      color: pageName === linkName ? "#FEAE8E" : "inherit", // Change color to yellow if pageName matches
    };
  };

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <img src="/logo.svg" alt="logo" width="100" />
        <Link href="/dashboard">
          <h1 style={getLinkStyle("dashboard")}>Home</h1>
        </Link>
        <Link href="/scheduling">
          <h1 style={getLinkStyle("scheduling")}>Schedule Session</h1>
        </Link>
        <Link href="/shop">
          {kid && <h1 style={getLinkStyle("shop")}>Shop</h1>}
        </Link>
      </div>
      <div className={styles.right}>
        {kid && <img src="/coin.svg" alt="coin" width="50" />}
        <img src="/profile.svg" alt="profile" width="50" />
      </div>
    </div>
  );
}
