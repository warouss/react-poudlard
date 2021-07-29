import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';
import logo from '../logo.svg';
import MenuButton from './MenuButton';
import { PropTypes } from 'prop-types';

const Header = ({ label }) => {
  const [isToken, setIsToken] = useState(false);
  const history = useHistory();
  const { t } = useTranslation();

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
              label={t('header.home')}
              onClick={() => handleLocation('/home')}
            ></MenuButton>
            <MenuButton
              label={t('header.houses')}
              onClick={() => handleLocation('/students/gryffindor')}
            ></MenuButton>
            <MenuButton
              label={t('header.ranking')}
              onClick={() => handleLocation('/ranking')}
            ></MenuButton>
            <MenuButton
              label={t('header.options')}
              onClick={() => handleLocation('/options')}
            ></MenuButton>
          </div>
          <div className='right-header'>
            <MenuButton
              label={t('header.disconnect')}
              onClick={logout}
            ></MenuButton>
          </div>
        </div>
      ) : null}
    </header>
  );
};

Header.propTypes = {
  label: PropTypes.string,
};

export default Header;
