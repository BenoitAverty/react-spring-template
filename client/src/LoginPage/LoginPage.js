import React from 'react'

import {Form, FormGroup, FormControl, ControlLabel, Button, Col} from 'react-bootstrap'

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
        <Form horizontal className="Login-form">
          <FormGroup controlId="username">
            <Col sm={2}><ControlLabel>Username</ControlLabel></Col>
            <Col sm={10}><FormControl type="text" value={this.state.username}
              onChange={e => this.onChange('username', e.target.value)} /></Col>
          </FormGroup>
          <FormGroup controlId="password">
            <Col sm={2}><ControlLabel>Password</ControlLabel></Col>
            <Col sm={10}><FormControl type="text" value={this.state.password}
              onChange={e => this.onChange('password', e.target.value)} /></Col>
          </FormGroup>
          <Button bsStyle="primary" type="submit" onClick={e => this.onSubmit(e)}>Login</Button>
        </Form>
      </div>
    )
  }
}

export default LoginPage;
