import React, { useState, useEffect } from "react";
import styles from "./Dash.module.css";
import { useRouter } from "next/navigation";
import { addElderToFirestore, addKidToFirestore, isNull } from "../firebase";
import TextToSpeechButton from "./tts.js";

export default function Dash() {
  const router = useRouter();
  const [isNullState, setIsNullState] = useState(false);

  useEffect(() => {
    const checkIsNull = async () => {
      const result = await isNull(); // Assuming isNull is an asynchronous function
      setIsNullState(result);
    };

    checkIsNull();
  }, []); // Empty dependency array ensures that the effect runs only once, similar to componentDidMount

  const handleRoleClick = async (role) => {
    console.log("Selected Role:", role);

    if (role === "Kid") {
      await addKidToFirestore();
    } else if (role === "Elder") {
      await addElderToFirestore();
    }
    router.push("./scheduling");
  };

  return (
    <div className={styles.main}>
      <TextToSpeechButton />
      <div className={styles.logoContainer}>
        {isNullState && (
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
        )}
      </div>
    </div>
  );
}
