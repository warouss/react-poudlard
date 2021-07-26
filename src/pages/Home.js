import React from 'react';
import { useHistory } from 'react-router-dom';
import Layout from './Layout';

const Home = () => {
  const history = useHistory();
  return (
    <Layout history={history}>
      <p>Page accueil</p>
    </Layout>
  );
};

export default Home;
