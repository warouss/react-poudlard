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
import Options from './../pages/Options';
import { CounterContextProvider } from './../context/CounterContext';
import { ThemeContextProvider } from './../context/ThemeContext';

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
    <ThemeContextProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <CounterContextProvider>
            <PrivateRoute path='/home'>
              <Home />
            </PrivateRoute>
            <PrivateRoute path='/students/:house'>
              <Students />
            </PrivateRoute>
            <PrivateRoute path='/ranking'>
              <Ranking />
            </PrivateRoute>
            <PrivateRoute path='/options'>
              <Options />
            </PrivateRoute>
          </CounterContextProvider>
        </Switch>
      </Router>
    </ThemeContextProvider>
  );
};

export default Routes;
