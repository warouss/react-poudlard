import React from 'react';
import './App.css';
import logo from './logo.svg';
import Counter from './components/Counter';

const App = () => {
  return (
    <div className='App'>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </div>

      <h1>Intranet Poudlard</h1>
      <Counter label='Gryffondor' />
      <Counter label='Serpentard' />
      <Counter label='Poufsouffle' />
      <Counter label='Serdaigle' />
    </div>
  );
};

export default App;
