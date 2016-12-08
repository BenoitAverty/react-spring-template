// Action types handled by this reducer
const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILURE = 'LOGIN_FAILURE'
const LOGOUT = 'LOGOUT'
export const actionTypes = {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT}

// Action creators
const loginRequest = () => ({
  type: LOGIN_REQUEST,
})

const loginSuccess = ({username, token}) => ({
  type: LOGIN_SUCCESS,
  payload: {username, token},
})

const loginFailure = err => ({
  type: LOGIN_FAILURE,
  payload: err,
})

export function login({ username, password }) {
  return function(dispatch) {
    dispatch(loginRequest())
    fetch('/api/authenticate', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(function(response) {
        if(!response.ok) {
          throw new Error(response.status)
        }
        return response.json()
      })
      .then(function(body) {
        console.log('Received response')
        dispatch(loginSuccess(body))
      })
      .catch(function(error) {
        console.log('caught error : ' + error.message)
        dispatch(loginFailure(error.message))
      })
  }
}

export const logout = () => ({
  type: LOGOUT
})

// Reducer
const initialState = {
  username: '',
}
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
      ...state,
        loginInProgress: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        token: action.payload.token,
        loginInProgress: false,
        loginError: false,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loginInProgress: false,
        loginError: action.payload,
      }
    case LOGOUT:
      return {...initialState}
    default:
      return state;
  }
}
