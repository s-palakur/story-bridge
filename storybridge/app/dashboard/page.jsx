import React from "react";
// import { Link } from "react-router-dom";
import styles from "./page.module.css";
import Navbar from "../Navbar";
import Dash from "./Dash"
export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar />
      <Dash />
    </div>
  );
}
