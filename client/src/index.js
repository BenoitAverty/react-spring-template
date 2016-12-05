import React from 'react'
import ReactDOM from 'react-dom'

import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import App from './App'
import LoginPage from './LoginPage'
import HomePage from './HomePage'

import './index.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="login" component={LoginPage} />
    </Route>
  </Router>,
  document.getElementById('root')
);
