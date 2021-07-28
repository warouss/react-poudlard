import React from 'react';
import Layout from './Layout';
import Counter from './../components/Counter';
import './Home.css';

const Home = () => {
  return (
    <Layout>
      <h1>Page accueil</h1>
      <div className='counters'>
        <Counter label='gryffindor'></Counter>
        <Counter label='slytherin'></Counter>
        <Counter label='ravenClaw'></Counter>
        <Counter label='hufflepuff'></Counter>
      </div>
    </Layout>
  );
};

export default Home;
