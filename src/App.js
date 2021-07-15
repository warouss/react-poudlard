import React from 'react';
import './App.css';
import logo from './logo.svg';
import LoginForm from './components/LoginForm';

const App = () => {
  return (
    <div className='App'>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </div>

      <h1>Intranet Poudlard</h1>
      <LoginForm />
    </div>
  );
};

export default App;
