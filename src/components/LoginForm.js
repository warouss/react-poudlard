import React from 'react';
import PropTypes from 'prop-types';
import './LoginForm.css';

const LoginForm = ({ onSubmit, onChange, email, password, message }) => {
  return (
    <div className='loginForm'>
      <form className='loginForm' onSubmit={onSubmit}>
        <p className='error'>{message}</p>
        <input
          placeholder='Email'
          name='email'
          type='email'
          value={email}
          onChange={onChange}
        ></input>
        <input
          placeholder='Password'
          name='password'
          type='password'
          value={password}
          onChange={onChange}
        ></input>
        <input type='submit'></input>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default LoginForm;
