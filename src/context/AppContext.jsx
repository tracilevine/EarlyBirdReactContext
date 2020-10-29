import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [name, setName] = useState('William');
  const [mood, setMood] = useState('Happy');

  return (
    <AppContext.Provider value={{ name, setName, mood, setMood }}>
      {children}
    </AppContext.Provider>
  );
};
