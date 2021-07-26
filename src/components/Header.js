import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';
import logo from '../logo.svg';

const Header = ({ label }) => {
  const [isToken, setIsToken] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setIsToken(!!localStorage.getItem('token'));
  });

  const logout = () => {
    localStorage.removeItem('token');
    history.push('/');
  };

  return (
    <header className='App-header'>
      <div className='left-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {label}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </div>
      {isToken ? (
        <div className='right-header'>
          <span onClick={logout}>Déconnexion</span>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
