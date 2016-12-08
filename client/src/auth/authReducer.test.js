import authReducer, {login, logout, actionTypes} from './authReducer'

describe('logout action creator', () => {
  it('returns a correct logout action', () => {
    const expected = { type: actionTypes.LOGOUT }
    const actual = logout()

    expect(actual).toEqual(expected)
  })
})

describe('login action creator', () => {
  it('Is an async action creator (returns a function)', () => {
    const action = login({ username: 'test', password: 'test' })
    expect(action).toBeInstanceOf(Function)
  })

  it('Performs login when the action is dispatched', () => {
    const action = login({ username: 'test', password: 'test' })
    action(a => a)
  })
})
