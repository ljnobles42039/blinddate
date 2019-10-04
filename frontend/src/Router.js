import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import Home from './components/home/Home';
//import NotFound from './components/404/NotFound.js';
import Login from './components/Login';
import Signup from './components/Signup';
import Homepage from './components/home/Homepage';
import Profile from './components/Profile';
import HostHomepage from './components/host/HostHomepage';
import HostProfile from './components/host/HostProfile';
//import './App.css';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/host/" component={HostHomepage} />
      <Route exact path="/host/profile" component={HostProfile} />
    </Switch>
  </BrowserRouter>
);

export default Router;
