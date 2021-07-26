import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Layout from './Layout';

const Students = () => {
  const { house } = useParams();
  const [students, setStudents] = useState([]);

  const getStudents = useCallback(() => {
    console.log('getStudents fror house : ', house);
    axios({
      method: 'GET',
      url: `http://hp-api.herokuapp.com/api/characters/house/${house}`,
    })
      .then((res) => {
        console.log(res.data);
        setStudents(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  useEffect(() => {
    getStudents();
  }, [house]);

  return (
    <Layout>
      <div className='Houses'>
        <Link to='/students/gryffindor' className='Link'>
          Gryffindor
        </Link>
        <Link to='/students/slytherin' className='Link'>
          Slytherin
        </Link>
        <Link to='/students/ravenClaw' className='Link'>
          RavenClaw
        </Link>
        <Link to='/students/hufflepuff' className='Link'>
          Hufflepuff
        </Link>
      </div>
      <h1>Elèves de la maison {house}</h1>
      {students ? (
        students.map((student) => <p key={student.name}>{student.name}</p>)
      ) : (
        <p>il y a une erreur</p>
      )}
    </Layout>
  );
};

export default Students;
