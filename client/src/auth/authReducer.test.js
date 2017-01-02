import nock from 'nock'
import thunk from 'redux-thunk'

import authReducer, {login, loginRequest, loginSuccess, loginFailure, logout, actionTypes} from './authReducer'

describe('logout action creator', () => {
  it('returns a correct logout action', () => {
    const dispatchMock = jest.fn()
    const logoutThunk = logout()

    const expected = { type: actionTypes.LOGOUT }

    logoutThunk(dispatchMock)
    expect(dispatchMock).toBeCalledWith({ type: actionTypes.LOGOUT })
  })
})

describe('login action creator', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('Is an async action creator (returns a function)', () => {
    const action = login({ username: 'test', password: 'test' })
    expect(action).toBeInstanceOf(Function)
  })

  it('Performs login when the action is dispatched', () => {
    const loginMock = nock(/.*/)
      .post('/api/authenticate')
      .reply(200, { body: {} })

    const action = login({ username: 'test', password: 'test' })

    return action(() => {})
      .then(() => {
        // Assert that loginMock was called
        loginMock.done()
      })
  })

  it('Dispatches LOGIN_REQUEST then LOGIN_SUCCESS in the nominal case', () => {
    const loginCredentials = { username: 'test', password: 'test' }
    const serverResponse = { username: 'username', token: 'token' }

    // simulate successful auth
    const loginMock = nock(/.*/)
      .post('/api/authenticate')
      .reply(200, serverResponse)

    const dispatchMock = jest.fn()

    // Create thunk with action creator
    const loginThunk = login(loginCredentials)

    // Calling thunk should dispatch proper actions
    return loginThunk(dispatchMock)
      .then(() => {
        expect(dispatchMock).toBeCalledWith(loginRequest())
        expect(dispatchMock).toBeCalledWith(loginSuccess(serverResponse))
      })
  })

  it('Dispatches LOGIN_REQUEST then LOGIN_FAILURE when credentials are incorrect', () => {
    const loginCredentials = { username: 'test', password: 'test' }

    // simulate successful auth
    const loginMock = nock(/.*/)
      .post('/api/authenticate')
      .reply(403)

    const dispatchMock = jest.fn()

    // Create thunk with action creator
    const loginThunk = login(loginCredentials)

    // Calling thunk should dispatch proper actions
    return loginThunk(dispatchMock)
      .then(() => {
        expect(dispatchMock).toBeCalledWith(loginRequest())
        expect(dispatchMock).toBeCalledWith(loginFailure("403"))
      })
  })
})

describe('auth reducer', () => {
  it('Returns the initial state when called with undefined', () => {
    const expectedState = { username: '' }
    const actualState = authReducer(undefined, {type: ''})

    expect(actualState).toEqual(expectedState)
  })

  it('Sets the "loginInProgress" flag to "true" when receiving a LOGIN_REQUEST action', () => {
    const initialState = {}
    const expectedState = { loginInProgress: true }
    const actualState = authReducer(initialState, loginRequest())

    expect(actualState).toEqual(expectedState)
  })

  it('Sets the username from the server when receiving a LOGIN_SUCCESS action', () => {
    const initialState = { loginInProgress: true }
    const serverResponse = { username: 'username', token: 'token' }
    const expectedState = {
      loginError: false,
      loginInProgress: false,
      username: 'username'
    }
    const actualState = authReducer(initialState, loginSuccess(serverResponse))

    expect(actualState).toEqual(expectedState)
  })

  it('Sets the error received in the state when receiving a LOGIN_FAILURE action', () => {
    const initialState = { loginInProgress: true }
    const expectedState = { loginInProgress: false, loginError: 403 }
    const actualState = authReducer(initialState, loginFailure(403))

    expect(actualState).toEqual(expectedState)
  })

  it('Resets the initial state when receiving a LOGOUT action', () => {
    const initialState = { username: 'user', token: 'tok' }
    const expectedState = { username: '' }
    const actualState = authReducer(initialState, { type: actionTypes.LOGOUT })

    expect(actualState).toEqual(expectedState)
  })
})
