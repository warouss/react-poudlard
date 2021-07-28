import React, { createContext, useReducer } from 'react'; // Create Context Object
export const ThemeContext = createContext(); // Create a provider for components to consume and subscribe to changes
import { ThemeClear, ThemeDark } from './../config/Themes';
import { PropTypes } from 'prop-types';

const initialState = {
  currentTheme: ThemeClear,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'clear':
      return { currentTheme: ThemeClear };
    case 'dark':
      return { currentTheme: ThemeDark };
    default:
      throw new Error();
  }
};

export const ThemeContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeContext.Provider value={[state, dispatch]}>
      {props.children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node,
};
