import { Person } from './Person';
import { people } from '../data';

export function List() {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
}

export default List;
