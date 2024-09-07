/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("tokenETL")) {
      setToken(localStorage.getItem("tokenETL"));
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
