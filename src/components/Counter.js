import React, { useContext } from 'react';
import './Counter.css';
import { PropTypes } from 'prop-types';
import { CounterContext } from './../context/CounterContext';

const Counter = ({ label }) => {
  const [state, dispatch] = useContext(CounterContext);

  return (
    <div className='counter'>
      <span className='house'>{label.toUpperCase()}</span>
      <p>{state[label]}</p>
      <button
        onClick={() => dispatch({ type: label, payload: state[label] - 1 })}
      >
        -
      </button>
      <button
        onClick={() => dispatch({ type: label, payload: state[label] + 1 })}
      >
        +
      </button>
    </div>
  );
};

Counter.propTypes = {
  label: PropTypes.string,
};

export default Counter;
