'use client'
import React from "react";
import styles from "./Landing.module.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuth, UserAuth, AuthContextProvider } from "./context/AuthContext.js"
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { writeUserDoc } from "./firebase";


export default function Landing() {
  const {googleSignIn, user, logOut} = useAuth();

  const router = useRouter();

  const handleSignin = async () => {
    try {
      const result = await googleSignIn()
      // You can access user information from the result, if needed
      const user = result.user.email;
      
      console.log("User signed in:", user);
      // router.push('/dashboard');
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  useEffect(() => {
    if (user != null) {
      console.log(user);
      router.push('/dashboard');
      writeUserDoc();
      console.log("wrote to user doc")
    } else {
      router.push('/');
      console.log("not logged in")
    }
  }, [user]);

  return (
    <div className={styles.main}>
      <div className={styles.logoContainer}>
      <img src="/logo.svg" alt="logo" className={styles.logo} />
            <p  className={styles.description}>Connecting generations, one story at a time.</p>
            <p className={styles.text}>We connect children with elders to foster reading time. <br></br>Sign up to start reading today!</p>
            <button onClick= {handleSignin} className={styles.button}>Sign Up/Log In</button>

      </div>
    </div>
  );
}
