import { useEffect, useState } from 'react';

const MultipleUseEffect = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  // Only runs when 1st value is updated
  useEffect(() => {
    console.log('hello from 1st useEffect');
  }, [value]);

  // Only runs 2nd value is updated
  useEffect(() => {
    console.log('hello from 2st useEffect');
  }, [value2]);
  return (
    <div>
      <h1>Value: {value}</h1>
      <button
        className='btn'
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increment
      </button>
      <h1>Value: {value2}</h1>
      <button
        className='btn'
        onClick={() => {
          setValue2(value2 + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default MultipleUseEffect;
