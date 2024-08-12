import React, { createContext } from "react";

const MyContext = createContext(null);
const MyProfider = ({ children }) => {
  return <MyContext.Provider value={{}}>{children}</MyContext.Provider>;
};

export default MyProfider;
