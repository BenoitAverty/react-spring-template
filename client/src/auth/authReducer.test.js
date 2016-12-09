import nock from 'nock'
import thunk from 'redux-thunk'

import authReducer, {login, loginRequest, loginSuccess, loginFailure, logout, actionTypes} from './authReducer'

describe('logout action creator', () => {
  it('returns a correct logout action', () => {
    const expected = { type: actionTypes.LOGOUT }
    const actual = logout()

    expect(actual).toEqual(expected)
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
