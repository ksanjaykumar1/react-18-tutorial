import { useState } from 'react';

const UseStateWithObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 10,
    hobby: 'playing piano',
  });

  const displayPerson = () => {
    setPerson({
      name: 'John',
      age: '12',
      hobby: 'hiking',
    });
  };
  const { name, age, hobby } = person;
  return (
    <div className='container'>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>Enjoy:{hobby}</h3>
      <button className='btn' onClick={displayPerson}>
        Show John
      </button>
    </div>
  );
};

export default UseStateWithObject;
