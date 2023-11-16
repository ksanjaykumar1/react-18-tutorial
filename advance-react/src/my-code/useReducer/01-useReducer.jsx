import React, { useReducer } from 'react';
import { data } from '../../data';

const defaultState = {
  people: data,
};
const reducer = (state, action) => {
  if (action.type === 'CLEAR_LIST') {
    return { ...state, people: [] };
  } else if (action.type === 'RESET_LIST') {
    return { ...state, people: data };
  } else if (action.type === 'REMOVE_PERSON') {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return { ...state, people: newPeople };
  }
  //
  throw new Error(`No matching "${action.type}-action type `);
};
const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  // const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_PERSON', payload: { id } });
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };
  const clearList = () => {
    dispatch({ type: 'CLEAR_LIST' });
  };
  const resetList = () => {
    dispatch({ type: 'RESET_LIST' });
  };
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length >= 1 ? (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear items
        </button>
      ) : (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
