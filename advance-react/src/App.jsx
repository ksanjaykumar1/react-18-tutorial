import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const handler = () => {
    setCount(count + 1);
  };
  return (
    <div className='container'>
      <h2>{count}</h2>
      <button onClick={handler} value={count} className='btn'>
        Increment
      </button>
    </div>
  );
}

export default App;
