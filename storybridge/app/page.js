"use client";
import styles from "./page.module.css";
import Navbar from "./Navbar";
import Landing from "./Landing";
import { AuthContextProvider } from "./context/AuthContext";

export default function Home() {
  return (
    <AuthContextProvider>
      <main className={styles.main}>
        <Navbar pageName="Home" />
        <Landing />
      </main>
    </AuthContextProvider>
  );
}
