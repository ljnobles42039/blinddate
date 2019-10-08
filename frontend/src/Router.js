import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import Home from './components/home/Home';
//import NotFound from './components/404/NotFound.js';
import Login from './components/Login';
//import Signup from './components/NNSignup';
import Signup from './components/Signup';
import Homepage from './components/home/Homepage';
import Profile from './components/Profile';
import HostProfile from './components/host/HostProfile';
import CreateEvent from './components/Event/CreateEvent';
import EditEvent from './components/Event/EditEvent';
import EventList from './components/Event/EventList';
import EventDetail from './components/Event/EventDetail';
import EventRandom from './components/Event/EventRandom';
//import './App.css';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/host/profile" component={HostProfile} />
      <Route exact path="/event/add" component={CreateEvent} />
      <Route exact path="/event/edit" component={EditEvent} />
      <Route exact path="/event" component={EventList} />
      <Route exact path="/event/random" component={EventRandom} />
      <Route exact path="/event/:id" component={EventDetail} />
    </Switch>
  </BrowserRouter>
);

export default Router;
