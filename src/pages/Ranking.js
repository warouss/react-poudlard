import React, { useState, useEffect, useContext } from 'react';
import Layout from './Layout';
import { CounterContext } from './../context/CounterContext';
import './Ranking.css';

const Ranking = () => {
  const [state] = useContext(CounterContext);
  const [arrayCounter, setArrayCounter] = useState(null);

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
        <h1>Classement</h1>
        {arrayCounter ? (
          <table>
            <thead>
              <tr>
                <th>House</th>
                <th>Score</th>
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
