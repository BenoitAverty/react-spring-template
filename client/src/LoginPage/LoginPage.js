import React from 'react'

import './LoginPage.css'


class LoginPage extends React.Component {

  constructor() {
    super()

    this.state = {
      loading: false,
      username: '',
      password: '',
      errors: [],
    }
  }

  onChange(field, val) {
    this.setState({ [field]: val })
  }

  onSubmit(e) {
    e.preventDefault()
    console.debug(`Submitting login : ${this.state.username}/${this.state.password}`)
  }

  render(props) {
    return (
      <div>
        <form className="Login-form">
          <span>
            <label htmlFor="username">Username : </label>
            <input type="text" id="username" name="username" value={this.state.username}
              onChange={e => this.onChange('username', e.target.value)} />
          </span>
          <span>
            <label htmlFor="password">Password : </label>
            <input type="password" id="password" name="password" value={this.state.password}
              onChange={e => this.onChange('password', e.target.value)} />
          </span>
          <input type="submit" value="Login" onClick={e => this.onSubmit(e)} />
        </form>
      </div>
    )
  }
}

export default LoginPage;
