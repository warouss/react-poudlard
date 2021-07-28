import React, { createContext, useReducer } from 'react'; // Create Context Object
export const CounterContext = createContext(); // Create a provider for components to consume and subscribe to changes
import { PropTypes } from 'prop-types';

const initialState = {
  gryffindor: 0,
  slytherin: 0,
  ravenClaw: 0,
  hufflepuff: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'gryffindor':
      return { ...state, gryffindor: action.payload };
    case 'slytherin':
      return { ...state, slytherin: action.payload };
    case 'ravenClaw':
      return { ...state, ravenClaw: action.payload };
    case 'hufflepuff':
      return { ...state, hufflepuff: action.payload };
    default:
      throw new Error();
  }
};

export const CounterContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={[state, dispatch]}>
      {props.children}
    </CounterContext.Provider>
  );
};

CounterContextProvider.propTypes = {
  children: PropTypes.node,
};
