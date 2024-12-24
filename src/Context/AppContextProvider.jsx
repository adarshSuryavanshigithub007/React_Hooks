import React, { createContext, useState, useContext } from "react";

// Create AppContext
const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);

  // Common Method
  const resetAll = () => {
    setUser(null);
    setCount(0);
  };

  return (
    <AppContext.Provider value={{ user, setUser, count, setCount, resetAll }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook to Access AppContext
export const useAppContext = () => useContext(AppContext);
