import { useState } from 'react';
import { data } from '../data';
function UseStateWithArray() {
  const [people, setPeople] = useState(data);
  const clear = () => {
    setPeople([]);
  };
  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div className='container'>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className='btn' onClick={clear}>
        Clear
      </button>
    </div>
  );
}

export default UseStateWithArray;
