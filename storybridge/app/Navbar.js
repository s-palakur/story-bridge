import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { isKid, getPoints } from "./firebase";

export default function Navbar() {
  const [isKidUser, setIsKidUser] = useState(true);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch user type when the component mounts
      const userIsKid = await isKid();
      setIsKidUser(userIsKid);

      // Fetch points if the user is a kid
      if (userIsKid) {
        const userPoints = await getPoints();
        setPoints(userPoints);
      }
    };

    fetchData();
  }, []);

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
        {isKidUser && <h1 style={{ fontWeight: "normal" }}>Shop</h1>}
      </div>
      <div className={styles.right}>
        {isKidUser && <img src="/coin.svg" alt="coin" width="50" />}
        {isKidUser && points !== null && <div>{points}</div>}

        <img src="/profile.svg" alt="profile" width="50" />
      </div>
    </div>
  );
}
