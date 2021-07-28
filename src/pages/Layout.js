import React from 'react';
import Header from '../components/Header';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div>
      <Header label='Intranet Poudlard'></Header>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
