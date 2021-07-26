import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from './Layout';

const Students = () => {
  const { house } = useParams();

  return (
    <Layout>
      <p>Page de la maison {house}</p>
    </Layout>
  );
};

export default Students;
