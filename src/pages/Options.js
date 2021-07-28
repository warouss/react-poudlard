import React, { useContext } from 'react';
import Layout from './Layout';
import { ThemeContext } from './../context/ThemeContext';
import './Options.css';

const Options = () => {
  const [state, dispatch] = useContext(ThemeContext);

  return (
    <Layout>
      <div className='options'>
        <h1>Options</h1>
        <h2>Thèmes</h2>
        <p>
          <label htmlFor='themes'>Themes : </label>
          <select
            id='themes'
            value={state.currentTheme.name}
            onChange={(event) => dispatch({ type: event.target.value })}
          >
            <option key='clear' value='clear'>
              Default
            </option>
            <option key='dark' value='dark'>
              Dark
            </option>
          </select>
        </p>
      </div>
    </Layout>
  );
};

export default Options;
