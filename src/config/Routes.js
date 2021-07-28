import React, { useCallback } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Login from './../pages/Login';
import Home from './../pages/Home';
import Students from './../pages/Students';
import Ranking from './../pages/Ranking';
import { CounterContextProvider } from './../context/CounterContext';

const PrivateRoute = (props) => {
  const isUserConnected = useCallback(() => {
    const isConnected = localStorage.getItem('token');
    return !!isConnected;
  });

  return isUserConnected() === true ? (
    <Route {...props} />
  ) : (
    <Redirect to='/' />
  );
};

const Routes = () => {
  return (
    <CounterContextProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <PrivateRoute path='/home'>
            <Home />
          </PrivateRoute>
          <PrivateRoute path='/students/:house'>
            <Students />
          </PrivateRoute>
          <PrivateRoute path='/ranking'>
            <Ranking />
          </PrivateRoute>
        </Switch>
      </Router>
    </CounterContextProvider>
  );
};

export default Routes;
