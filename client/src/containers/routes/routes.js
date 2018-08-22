import React from 'react';

import { Redirect, Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { auth } from '../../utils/utils';

// Páginas
import HomePage from '../../pages/homepage/HomePage';
import LoginPage from '../../pages/loginpage/LoginPage';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route { ...rest } render={props => (
    auth.isAuthenticated() ? (
      <Component { ...props } />
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )
  )} />
)

const UnregisteredUsersRoute = ({ component: Component, ...rest }) => (
  <Route { ...rest } render={props => (
    !auth.isAuthenticated() ? (
      <Component { ...props } />
    ) : (
      <Redirect to={{ pathname: '/user', state: { from: props.location } }} />
    )
  )} />
)

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={ HomePage } path="/" exact strict />
      <UnregisteredUsersRoute component={ LoginPage } path="/login" exact strict />
      <Route render={() => <h1>Eu sou a página de registro</h1>} path="/register" exact strict />
      <PrivateRoute component={() => <h1>Eu sou a página de perfil</h1>} path="/user" exact strict />
    </Switch>
  </BrowserRouter>
)

export default routes;
