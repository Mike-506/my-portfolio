import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <AppContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </AppContext.Provider>
  );
};