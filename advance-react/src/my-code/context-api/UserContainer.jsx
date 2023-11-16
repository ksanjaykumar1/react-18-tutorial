import { useContext } from 'react';
import { NavBarContext } from './NavBar';

const UserContainer = () => {
  const { user, logout } = useContext(NavBarContext);
  return (
    <div className='user-container'>
      {user ? (
        <>
          <p>Hello There, {user.name.toUpperCase()}</p>
          <button type='button' className='btn' onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};

export default UserContainer;
