import React from 'react';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Login from './../pages/Login';
import Home from './../pages/Home';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route path='/home' component={Home}></Route>
      </Switch>
    </Router>
  );
};

export default Routes;
