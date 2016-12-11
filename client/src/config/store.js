import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleWare from 'redux-thunk'
import {authReducer as auth} from '../auth'
import {greetingsReducer as greetings} from '../greetings'

const reducer = combineReducers({ greetings, auth })

const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer, devCompose(applyMiddleware(thunkMiddleWare))
)

export default store
