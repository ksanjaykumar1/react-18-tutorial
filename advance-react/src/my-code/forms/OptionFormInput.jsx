import { useState } from 'react';

function OptionFormInput() {
  const [shipping, setShipping] = useState(false);
  const frameworks = ['react', 'angular', 'vue', 'svelte'];
  const [framework, setFramework] = useState('react');
  return (
    <form className='form'>
      <h3>OptionFormInput</h3>
      <div className='form-row' style={{ textAlign: 'left' }}>
        <input
          type='checkbox'
          value={shipping}
          id='shipping'
          name='shipping'
          onChange={() => {
            setShipping(!shipping);
          }}
        />
        <label htmlFor='shipping'>Free Shipping</label>
      </div>
      <div className='form-row' style={{ textAlign: 'left' }}>
        <label htmlFor='framework' className='form-label'>
          Framework
        </label>
        <select
          name='framework'
          id='framework'
          value={framework}
          onChange={(e) => setFramework(e.target.value)}
        >
          {frameworks.map((framework) => {
            return <option key={framework}>{framework}</option>;
          })}
        </select>
      </div>
      <button type='submit' className='btn btn-block'>
        submit
      </button>
    </form>
  );
}

export default OptionFormInput;
