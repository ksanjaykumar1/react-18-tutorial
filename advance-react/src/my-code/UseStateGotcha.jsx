import { useState } from 'react';

function UseStateGotcha() {
  const [value, setValue] = useState(0);
  //   const handleClick = () => {
  //     setValue((currentState) => {
  //       const newState = currentState + 1;
  //       return newState;
  //     });
  //   };
  const handleClick = () => {
    setTimeout(() => {
      setValue((currentState) => {
        const newState = currentState + 1;
        console.log(newState);
        return newState;
      });
    }, 3000);
  };
  return (
    <div className='container'>
      <h2>{value}</h2>
      <button onClick={handleClick} className='btn'>
        Increment
      </button>
    </div>
  );
}

export default UseStateGotcha;
