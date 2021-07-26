import React from 'react';
import Header from '../components/Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header label='Intranet Poudlard'></Header>
      {children}
    </div>
  );
};

export default Layout;
