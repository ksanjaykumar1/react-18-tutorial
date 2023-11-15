import { useState } from 'react';

function MultipleInput() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = user;
    if (!name || !email || !password) {
      return;
    }
    console.log(user);
  };
  return (
    <div>
      <form className='form'>
        <h3>Multiple Input</h3>
        <div className='form-row' onSubmit={handleSubmit}>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            id='name'
            name='name'
            type='text'
            className='form-input'
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            id='email'
            name='email'
            type='email'
            className='form-input'
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            id='password'
            name='password'
            type='password'
            className='form-input'
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button className='btn btn-block' onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default MultipleInput;
