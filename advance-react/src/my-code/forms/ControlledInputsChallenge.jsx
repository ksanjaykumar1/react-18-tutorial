import { useState } from 'react';

import { data } from '../../data';

function ControlledInputsChallenge() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      return;
    }
    const fakeId = Date.now();
    setUsers([...users, { id: fakeId, name }]);
    setName('');
  };
  const pop = (id) => {
    const newUser = users.filter((user) => user.id !== id);
    setUsers(newUser);
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Controlled inputs</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='form-input'
            id='name'
          />
        </div>
        <button type='submit' onClick={handleSubmit} className='btn btn-block'>
          submit
        </button>
      </form>
      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <h2>{user.name}</h2>
              <button className='btn' onClick={() => pop(user.id)}>
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ControlledInputsChallenge;
