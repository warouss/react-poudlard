import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from './Layout';
import Counter from './../components/Counter';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <h1>{t('home.title')}</h1>
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
