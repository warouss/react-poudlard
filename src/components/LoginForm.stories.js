import React from 'react';

import { storiesOf } from '@storybook/react';

import LoginForm from './LoginForm';

const onSubmit = () => {
  console.log('onSubmit() ------------');
};

const onChange = (event) => {
  console.log('onChange()', event);
};

storiesOf('LoginForm', module).add('default', () => (
  <LoginForm
    onSubmit={() => onSubmit()}
    onChange={(event) => onChange(event)}
    email='test@email.com'
    password='passw0rd'
    message='message erreur'
  ></LoginForm>
));
