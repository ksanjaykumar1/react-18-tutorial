import { data } from '../../data';
import { CLEAR_LIST, REMOVE_PERSON, RESET_LIST } from './action';

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  } else if (action.type === RESET_LIST) {
    return { ...state, people: data };
  } else if (action.type === REMOVE_PERSON) {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return { ...state, people: newPeople };
  }
  //
  throw new Error(`No matching "${action.type}-action type `);
};

export default reducer;
