"use client"
import React from "react";
import styles from "./Dash.module.css";
import { useRouter } from "next/navigation"; // Import Next.js router
import {
  addElderToFirestore,
  addKidToFirestore
} from "../firebase";


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
      <div className={styles.logoContainer}>
      <div>
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



// "use client";
// import React from "react";
// import styles from "./page.module.css";
// import Navbar from "../Navbar";
// import Dash from "./Dash";
// // import Timer from "./Timer";
// import Link from "next/link";
// import CountdownTimer from "./CountdownTimer";

// export default function Home() {
//   const targetDate = new Date();
//   targetDate.setDate(targetDate.getDate() + 7);
//   const hasSession = true;
//   // TODO: dynamically set

//   return (
//     <div className={styles.main}>
//       <Navbar pageName="dashboard" />
//       {hasSession && <CountdownTimer targetDate={targetDate} />}
//       {!hasSession && (
//         <div className={styles.container}>
//           <h1>You have no upcoming story sessions.</h1>
//           <Link href="/scheduling">
//             <div className={styles.accent}>Schedule one now!</div>
//           </Link>
//         </div>
//       )}
//       <Dash />
//     </div>
//   );
// }
