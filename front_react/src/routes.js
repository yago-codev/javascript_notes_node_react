import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import UsersEdit from './pages/Users/Edit';
import Notes from './pages/Notes/Index';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/register" component={ Register } />
      <Route path="/login" component={ Login } />
      <Route path="/users/edit" component={ UsersEdit } />
      <Route path="/notes" component={ Notes } />
    </Switch>
  </BrowserRouter>
)

export default Routes;
