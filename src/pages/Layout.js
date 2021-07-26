import React, { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import Header from '../components/Header';

const Layout = ({ history, children }) => {
  // const history = useHistory();

  const checkToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      history.push('/home');
    } else {
      history.push('/');
    }
  };

  useEffect(() => {
    console.log('Layout.useEffect()');
    checkToken();
  }, []);

  return (
    <div>
      <Header history={history}></Header>
      {children}
    </div>
  );
};

export default Layout;
