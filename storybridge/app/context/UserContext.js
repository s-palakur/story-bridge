// /* @jsxImportSource react */
// import { createContext, useContext, useState } from 'react';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [userInput, setUserInput] = useState('');

//   const updateUserInput = (input) => {
//     setUserInput(input);
//   };

//   return (
//     <UserContext.Provider value={{ userInput, updateUserInput }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => {
//   return useContext(UserContext);
// };
