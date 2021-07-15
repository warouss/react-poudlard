import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const verificationLogin = () => {
    if (!password) {
      setMessage('Veuillez entrer un mot de passe');
      return false;
    }
    setMessage('');
    return true;
  };

  const onSubmit = (event) => {
    event.preventDefault(); // pour ne pas executer l'action par défaut (qui est ici le rechargement de la page)
    console.log(event.target);
    console.log(`email = ${event.target.email.value}`);
    if (verificationLogin() === false) {
      return;
    }

    axios({
      method: 'POST',
      url: 'https://easy-login-api.herokuapp.com/users/login',
      data: {
        username: email,
        password: password,
      },
    })
      .then((res) => {
        console.log(res.headers['x-access-token']);
        localStorage.setItem('token', res.headers['x-access-token']);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='loginForm'>
      <form className='loginForm' onSubmit={onSubmit}>
        <p className='error'>{message}</p>
        <input
          placeholder='Email'
          name='email'
          type='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <input
          placeholder='Password'
          name='password'
          type='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <input type='submit'></input>
      </form>
    </div>
  );
};

export default LoginForm;
