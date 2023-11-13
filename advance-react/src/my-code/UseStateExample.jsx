import { useState } from 'react';

function UseStateExample() {
  const [count, setCount] = useState(0);
  const handler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div className='container'>
        <h2>{count}</h2>
        <button onClick={handler} value={count} className='btn'>
          Increment
        </button>
      </div>
    </div>
  );
}

export default UseStateExample;
