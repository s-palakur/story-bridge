"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Navbar from "../Navbar";
import Shop from "./Shop"
export default function Home() {
  return (
    <div>
      <Navbar pageName="shop" />
      <Shop />
    </div>
  );
}
