import styles from "./page.module.css";
import Navbar from "./Navbar";
import Landing from "./Landing"

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Landing/>
      
      
    </main>
  );
}
