import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import './Ranking.css';

const Ranking = () => {
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
    const counterState = {
      gryffindor: 10,
      slytherin: 7,
      ravenClaw: 5,
      hufflepuff: 3,
    };
    toArray(counterState);
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
