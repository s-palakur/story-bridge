
/* @jsxImportSource react */
import { useContext, createContext, useEffect, useState } from "react";
import { auth, firestore, getID } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";

import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  // COMMENTED OUT FOR NOW (by amy feb 3 4:32 pm)
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     console.log("User is now ", currentUser);
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

// /* @jsxImportSource react */
// import { useContext, createContext, useEffect, useState } from "react";
// import { auth, firestore, getID } from "../../../../../qwerhacks2023/src/Firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { setDoc, doc, getDoc } from "firebase/firestore";

// import {
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
//   onAuthStateChanged,
//   getAuth,
// } from "firebase/auth";

// const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState({});

//   const googleSignIn = () => {
//     const provider = new GoogleAuthProvider();
//     // add scopes for Calendar API (what we want to access from user's Google Account)
//     // provider.addScope("https://www.googleapis.com/auth/calendar");
//     // provider.addScope("https://www.googleapis.com/auth/calendar.events");
//     // provider.addScope(
//     //   "https://www.googleapis.com/auth/calendar.events.readonly"
//     // );
//     // provider.addScope("https://www.googleapis.com/auth/calendar.readonly"); // commenter @amy-al: need to check whether need readonly scopes when already have editing scopes
//     // provider.addScope(
//     //   "https://www.googleapis.com/auth/calendar.settings.readonly"
//     // );
//     signInWithPopup(auth, provider);
//   };

//   const logOut = () => {
//     signOut(auth);
//   };

//   useEffect(() => {
//     // const isThereCurrentUser = getAuth();
//     // if (isThereCurrentUser == null) {
//     //   setUser(null);
//     //   // console.log("User is now ", isThereCurrentUser.currentUser);
//     //   return;
//     // }
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       console.log("User is now ", currentUser);
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return (
//     <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const UserAuth = () => {
//   return useContext(AuthContext);
// };

// export function useAuth() {
//   const [authUser, authLoading, error] = useAuthState(auth);
//   const [isLoading, setLoading] = useState(true);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       setLoading(true);
//       const ref = doc(firestore, "userCollection", getID());
//       const userDocSnapshot = await getDoc(ref);
//       setUser(userDocSnapshot.data());
//       setLoading(false);
//     }

//     if (!authLoading) {
//       if (authUser) fetchData();
//       else setLoading(false);
//     }
//   }, [authLoading]);

//   return { user: user, isLoading, error };
// }