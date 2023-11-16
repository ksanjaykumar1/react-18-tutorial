import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

export const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const [user, setUser] = useState({ name: 'sanjay' });
  return (
    <GlobalContext.Provider value={{ user }}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export default AppContext;
