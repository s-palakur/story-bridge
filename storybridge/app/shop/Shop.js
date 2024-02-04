import React from "react";
import styles from "./Shop.module.css";

export default function Shop() {

  return (
    <div className={styles.main}>
      <div className={styles.logoContainer}>
        <h2>
          Answer questions during storytime to earn gold. Spend your gold here
          to customize your avatar!
        </h2>
        <div className={styles.logo}>
      <img src="/duck.svg" alt="logo" className={styles.logo} /></div>
      </div>
    </div>
  );
}
