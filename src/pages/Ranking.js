import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from './Layout';
import { CounterContext } from './../context/CounterContext';
import './Ranking.css';

const Ranking = () => {
  const [state] = useContext(CounterContext);
  const [arrayCounter, setArrayCounter] = useState(null);
  const { t } = useTranslation();

  const toArray = (obj) => {
    const sortable = [];
    for (let house in obj) {
      sortable.push({ name: house, score: obj[house] });
    }
    setArrayCounter(
      sortable.sort((a, b) => {
        return b.score - a.score;
      })
    );
  };

  useEffect(() => {
    toArray(state);
  }, []);

  return (
    <Layout>
      <div className='ranking'>
        <h1>{t('ranking.title')}</h1>
        {arrayCounter ? (
          <table>
            <thead>
              <tr>
                <th>{t('ranking.house')}</th>
                <th>{t('ranking.score')}</th>
              </tr>
            </thead>
            <tbody>
              {arrayCounter.map((house, index) => {
                return (
                  <tr key={index}>
                    <td>{house.name}</td>
                    <td>{house.score}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>pas d&apos;infos disponibles</p>
        )}
      </div>
    </Layout>
  );
};

export default Ranking;
