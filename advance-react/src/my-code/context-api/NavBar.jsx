import React, { useState } from 'react';
import NavLinks from './NavLinks';

function NavBar() {
  const [user, setUser] = useState({ name: 'steve' });
  const logout = () => {
    setUser(null);
  };
  return (
    <div>
      <NavLinks user={user} logout={logout} />
    </div>
  );
}

export default NavBar;
