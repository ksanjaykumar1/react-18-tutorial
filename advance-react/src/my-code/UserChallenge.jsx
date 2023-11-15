import { useState } from 'react';

function UserChallenge() {
  const [user, setUser] = useState(null);
  const handleClick = () => {
    if (!user) {
      setUser({
        name: 'sanjay',
      });
      return;
    }
    setUser(null);
  };
  return (
    <div>
      {user ? <h4>hello there {user.name}</h4> : <h4>Please login</h4>}
      <button onClick={handleClick} className='btn'>
        {user ? 'logout' : 'login'}
      </button>
    </div>
  );
}

export default UserChallenge;
