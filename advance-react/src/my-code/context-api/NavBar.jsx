import React, { createContext, useState } from 'react';
import NavLinks from './NavLinks';

export const NavBarContext = createContext();

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
