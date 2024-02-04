"use client"
import React from "react";
import styles from "./Dash.module.css";
import { useRouter } from "next/navigation"; // Import Next.js router
import {
  addElderToFirestore,
  addKidToFirestore
} from "../firebase";

import TextToSpeechButton from "./tts.js"

export default function Dash() {
  const router = useRouter();

  const handleRoleClick = (role) => {
    // Perform actions based on the selected role
    console.log("Selected Role:", role);

    // Navigate to a different page based on the selected role
    if (role === "Kid") {
      addKidToFirestore()
    } else if (role === "Elder") {
      addElderToFirestore()
    }
    router.push("./scheduling");
  };

  return (
    <div className={styles.main}>
      <TextToSpeechButton />
      <div className={styles.logoContainer}>
      <div id="readable">
        <p className={styles.description}>I am a...</p>
        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            onClick={() => handleRoleClick("Kid")}
          >
            Kid
          </button>
          <button
            className={styles.button}
            onClick={() => handleRoleClick("Elder")}
          >
            Elder
          </button>
        </div>
        </div>
      </div>
     </div> 
  );
}
