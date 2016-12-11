const GREETINGS_RESULT = 'GREETINGS_RESULT'

export function getGreetings() {
  return function(dispatch) {
    return fetch('/api/greetings')
      .then(response => response.text())
      .then(body => {
        dispatch(greetingsResult(body))
      })
  }
}

function greetingsResult(response) {
  return {
    type: GREETINGS_RESULT,
    payload: response
  }
}

const initialState = { simpleGreetingsResponse: '' }
function greetingsReducer(state = initialState, action) {
  if(action.type === GREETINGS_RESULT) {
    return {
      ...state,
      simpleGreetingsResponse: action.payload
    }
  }

  return state
}

export default greetingsReducer
