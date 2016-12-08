import {createStore, compose, applyMiddleware} from 'redux'
import thunkMiddleWare from 'redux-thunk'
import {authReducer} from '../auth'

const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  authReducer, devCompose(applyMiddleware(thunkMiddleWare))
)

export default store
