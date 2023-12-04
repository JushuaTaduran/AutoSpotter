import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedInUserDetails, setLoggedInUserDetails] = useState(null);

  return (
    <UserContext.Provider
      value={{ loggedInUserDetails, setLoggedInUserDetails }}
    >
      {children}
    </UserContext.Provider>
  );
};
