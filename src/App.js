import { hot } from 'react-hot-loader/root';
import React from 'react'

import Home from './pages/home/Home'

import ComingSoon from './pages/comingSoon/ComingSoon'

import { Route, Switch } from "react-router-dom";

import { withAuthenticator } from 'aws-amplify-react';


import './App.scss';

function App() {

  return (
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/signals" exact component={ComingSoon} />
      <Route path="/rewards" exact component={ComingSoon} />
      <Route path="/awards" exact component={ComingSoon} />
      <Route path="/analytics" exact component={ComingSoon} />
      <Route path="/integrations" exact component={ComingSoon} />
      <Route path="/user" exact component={ComingSoon} />
    </Switch>
  )
}

export default withAuthenticator(hot(App));