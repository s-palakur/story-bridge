import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { isKid, getPoints } from "./firebase";

export default function Navbar({ pageName = "Home" }) {
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
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  // Function to determine the style of a link
  const getLinkStyle = (linkName) => {
    return {
      fontWeight: "normal",
      color: pageName === linkName ? "#FEAE8E" : "inherit", // Change color to yellow if pageName matches
    };
  };

  // useEffect for continuous points update
  useEffect(() => {
    const intervalId = setInterval(async () => {
      // Fetch points if the user is a kid
      if (isKidUser) {
        const userPoints = await getPoints();
        setPoints(userPoints);
      }
    }, 60000); // Fetch points every 60 seconds

    return () => clearInterval(intervalId); // Cleanup the interval when the component unmounts
  }, [isKidUser]); // Run the effect whenever isKidUser changes

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <img src="/logo.svg" alt="logo" width="100" />
        <Link href="/dashboard">
          <h2 style={getLinkStyle("dashboard")}>Home</h2>
        </Link>
        <Link href="/scheduling">
          <h2 style={getLinkStyle("scheduling")}>Schedule Session</h2>
        </Link>
        <Link href="/shop">
          {isKidUser && <h2 style={getLinkStyle("shop")}>Shop</h2>}
        </Link>
      </div>
      <div className={styles.right}>
        {isKidUser && <img src="/coin.svg" alt="coin" width="50" />}
        {isKidUser && points !== null && <h1>{points}</h1>}
        <Link href="/profile">
        <img src="/profile.svg" alt="profile" width="50" /></Link>
        <h2 style={{ ...getLinkStyle("sign out"), marginRight: "40px" }} onClick={() => logOut()}>
          Sign Out
        </h2>
      </div>
    </div>
  );
}