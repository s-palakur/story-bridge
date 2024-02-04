'use client'
import React, { useState } from "react";
import { useUser, UserProvider} from '../context/UserContext';
import styles from "./createAccount.module.css";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { useAuth, UserAuth, AuthContextProvider } from "./context/AuthContext.js"
// import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
// import { writeUserDoc } from "./firebase";



export default function createAccount() {
  // const {googleSignIn, user, logOut} = useAuth();

  const router = useRouter();
  const [userInput, setUserInput] = useState('');
//   const { updateUser } = useUser();

  const handleSignin = async () => {
    console.log("User input:", userInput);
    // updateUser(userInput);
    // router.push('/dashboard');
  };

  // const handleSignin = async () => {
  //   try {
  //     const result = await googleSignIn()
  //     if (result && result.user) {
  //       const user = result.user;
  //       console.log("User signed in:", user);
  //     } else {
  //       console.error("Error signing in with Google: result or result.user is undefined");
  //     }

  //     console.log("User signed in:", user);
  //     router.push('/dashboard');
  //     console.log("test3");
  //   } catch (error) {
  //     console.error("Error signing in with Google:", error.message);
  //   }
  // };

  // useEffect(() => {
  //   if (user !== null) {
  //     console.log("user", user)
  //     router.push('/dashboard');
  //     writeUserDoc();
  //     console.log("wrote to user doc")
  //   } else {
  //     router.push('/');
  //     console.log("not logged in")
  //   }
  // }, [user]);

  return (
        <div className={styles.main}>
      <div className={styles.logoContainer}>
      <img src="/logo.svg" alt="logo" className={styles.logo} />
            <p  className={styles.description}>Create an account or log in.</p>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter your name"
          className={styles.textInput}
        />
            <button onClick= {handleSignin} className={styles.button}>Log In</button>

      </div>
    </div>
    
    
  );
}