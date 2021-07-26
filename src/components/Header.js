import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';
import logo from '../logo.svg';
import MenuButton from './MenuButton';

const Header = ({ label }) => {
  const [isToken, setIsToken] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setIsToken(!!localStorage.getItem('token'));
  });

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    history.push('/');
  });

  const handleLocation = useCallback((location) => {
    history.push(location);
  });

  return (
    <header>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>{label}</p>
      </div>
      {isToken ? (
        <div className='menu'>
          <div className='left-header'>
            <MenuButton
              label='Accueil'
              onClick={() => handleLocation('/home')}
            ></MenuButton>
            <MenuButton
              label='Maisons'
              onClick={() => handleLocation('/students/gryffindor')}
            ></MenuButton>
            <MenuButton
              label='Classement'
              onClick={() => handleLocation('/ranking')}
            ></MenuButton>
          </div>
          <div className='right-header'>
            <MenuButton label='Déconnexion' onClick={logout}></MenuButton>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
