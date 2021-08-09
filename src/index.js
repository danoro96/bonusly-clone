import React from 'react';
import { render } from 'react-dom';
import App from './App';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

const rootEl = document.getElementById('root');

function Root() {
    return (
      <React.StrictMode>
        <Router>
          <Route path="/" component={App} />
        </Router>
      </React.StrictMode>
    )
}

render(<Root />, rootEl);

if (module.hot) {
  module.hot.accept();
}