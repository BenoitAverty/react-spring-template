import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleWare from 'redux-thunk'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import {App, HomePage} from './app'
import {AuthPage, authReducer} from './auth'

import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const store = createStore(authReducer, applyMiddleware(thunkMiddleWare))

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/login" component={AuthPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
