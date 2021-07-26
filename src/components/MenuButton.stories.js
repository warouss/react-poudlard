import React from 'react';

import { storiesOf } from '@storybook/react';

import MenuButton from './MenuButton';

const handleOnClick = () => {
  console.log('handleOnClick() ------------');
};

storiesOf('MenuButton', module)
  .add('default', () => <MenuButton></MenuButton>)
  .add('with label', () => (
    <MenuButton label='label test' onClick={() => handleOnClick()}></MenuButton>
  ));
