"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Navbar from "../Navbar";

export default function Home() {
  return (
    <div>
      <Navbar pageName="shop" />
      <div className={styles.main}>
        <h1>
          Answer questions during storytime to earn gold. Spend your gold here
          to customize your avatar!
        </h1>
      </div>
    </div>
  );
}
