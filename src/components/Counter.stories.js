import React from 'react';

import { storiesOf } from '@storybook/react';

import Counter from './Counter';

storiesOf('Counter', module)
  .add('default', () => <Counter></Counter>)
  .add('with label', () => <Counter label='label test'></Counter>);
