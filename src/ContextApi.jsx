import React, { createContext, useContext, useState } from "react";

// Create Context
const AppContext = createContext();

// Context Provider
export const AppProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [isOwner, setIsOwner] = useState(false);

  return (
    <AppContext.Provider
      value={{
        currentAccount,
        setCurrentAccount,
        contract,
        setContract,
        isOwner,
        setIsOwner,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Hook to use the AppContext
export const useAppContext = () => useContext(AppContext);
