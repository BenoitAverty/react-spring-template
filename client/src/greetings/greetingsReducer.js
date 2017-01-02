import {fetch} from '../core/http'

const SIMPLE_GREETINGS_RESULT = 'SIMPLE_GREETINGS_RESULT'
const NAMED_GREETINGS_RESULT = 'NAMED_GREETINGS_RESULT'

export function getGreetings(param) {
  return function(dispatch) {
    if(param) {
      return fetch(`/api/greetings/${param}`)
        .then(response => response.text())
        .then(body => {
          dispatch(namedGreetingsResult(body))
        })
    }
    else {
      return fetch('/api/greetings')
        .then(response => response.text())
        .then(body => {
          dispatch(simpleGreetingsResult(body))
        })
    }
  }
}

function simpleGreetingsResult(response) {
  return {
    type: SIMPLE_GREETINGS_RESULT,
    payload: response
  }
}

function namedGreetingsResult(response) {
  return {
    type: NAMED_GREETINGS_RESULT,
    payload: response
  }
}

const initialState = { simpleGreetingsResponse: '', namedGreetingsResponse: '' }
function greetingsReducer(state = initialState, action) {

  switch (action.type) {
    case SIMPLE_GREETINGS_RESULT:
      return {
        ...state,
        simpleGreetingsResponse: action.payload
      }
    case NAMED_GREETINGS_RESULT:
      return {
        ...state,
        namedGreetingsResponse: action.payload
      }
    default:
      return state
  }
}

export default greetingsReducer
