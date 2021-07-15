import React, { useState } from 'react';
import './Counter.css';
import { PropTypes } from 'prop-types';

const Counter = ({ label }) => {
  const [counter, setCounter] = useState(0);

  return (
    <div className='counter'>
      <p>{label}</p>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

Counter.propTypes = {
  label: PropTypes.string,
};

export default Counter;
