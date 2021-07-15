import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from './../components/LoginForm';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();

  const checkToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      history.push('/home');
    }
  };

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
        console.log(`token=${res.headers['x-access-token']}`);
        console.log(res.headers['x-access-token']);
        localStorage.setItem('token', res.headers['x-access-token']);
        history.push('/home');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChange = (event) => {
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else if (event.target.name === 'password') {
      setPassword(event.target.value);
    }
  };

  useEffect(() => {
    console.log('Login.useEffect() --------------');
    checkToken();
  }, []);

  return (
    <>
      <LoginForm
        email={email}
        password={password}
        message={message}
        onChange={onChange}
        onSubmit={onSubmit}
      ></LoginForm>
    </>
  );
};

export default Login;
