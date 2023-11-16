import React, { createContext, useContext, useState } from 'react';
import NavLinks from './NavLinks';

export const NavBarContext = createContext();

//  custom hook

export const useAppContext = () => useContext(NavBarContext);

function NavBar() {
  const [user, setUser] = useState({ name: 'steve' });
  const logout = () => {
    setUser(null);
  };
  return (
    <NavBarContext.Provider value={{ user, logout }}>
      <div className='navbar'>
        <h5>CONTEXT API</h5>
        <NavLinks />
      </div>
    </NavBarContext.Provider>
  );
}

export default NavBar;
