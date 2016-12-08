import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleWare from 'redux-thunk'
import {Router, browserHistory} from 'react-router'

import routes from './router/routes'
import {App, HomePage} from './core'
import {AuthPage, authReducer} from './auth'

import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  authReducer, devCompose(applyMiddleware(thunkMiddleWare))
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
