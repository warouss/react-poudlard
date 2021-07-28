import React from 'react';
import PropTypes from 'prop-types';
import './MenuButton.css';

const MenuButton = ({ label, onClick }) => {
  return (
    <>
      <div className='menuButton'>
        <span onClick={onClick}>{label}</span>
      </div>
    </>
  );
};

MenuButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default MenuButton;
