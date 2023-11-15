import { useState } from 'react';

function ToggleChallenge() {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      {toggle && <div className='alert alert-danger'>Toggle is ON</div>}
      <button className='btn' onClick={() => setToggle(!toggle)}>
        {toggle ? 'hide' : 'show'}
      </button>
    </div>
  );
}

export default ToggleChallenge;
