import React from 'react';

import { Redirect, Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { isAuthenticated } from '../../utils/utils';

// Páginas
import HomePage from '../../pages/homepage/HomePage';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route { ...rest } render={props => (
    isAuthenticated() ? (
      <Component { ...props } />
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )
  )} />
)

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={ HomePage } path="/" exact strict />
      <Route render={() => <h1>Eu sou a página de login</h1>} path="/login" exact strict />
      <Route render={() => <h1>Eu sou a página de registro</h1>} path="/register" exact strict />
      <PrivateRoute render={() => <h1>Eu sou a página de perfil</h1>} path="/user" exact strict />
    </Switch>
  </BrowserRouter>
)

export default routes;
