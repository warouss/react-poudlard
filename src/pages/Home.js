import React from 'react';
import Layout from './Layout';
import Counter from './../components/Counter';
import './Home.css';

const Home = () => {
  return (
    <Layout>
      <h1>Page accueil</h1>
      <div className='counters'>
        <Counter label='Gryffindor'></Counter>
        <Counter label='Slytherin'></Counter>
        <Counter label='RavenClaw'></Counter>
        <Counter label='Hufflepuff'></Counter>
      </div>
    </Layout>
  );
};

export default Home;
