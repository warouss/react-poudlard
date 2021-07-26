import React from 'react';
import PropTypes from 'prop-types';
import './MenuButton.css';

const MenuButton = ({ onClick, label }) => {
  return (
    <>
      <div className='menuButton'>
        <span onClick={onClick}>{label}</span>
      </div>
    </>
  );
};

MenuButton.propTypes = {
  email: PropTypes.string,
  onClick: PropTypes.func,
};

export default MenuButton;
