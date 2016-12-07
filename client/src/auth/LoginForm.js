import React from 'react'
import {Form, FormGroup, FormControl, ControlLabel, Button, Col} from 'react-bootstrap'

export default class LoginForm extends React.Component {

  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
    }
  }

  onChange(field, val) {
    this.setState({ [field]: val })
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit({
      username: this.state.username,
      password: this.state.password
    })
  }

  render() {
    return (
      <Form horizontal className="Login-form">
        <FormGroup controlId="username">
          <Col sm={2}><ControlLabel>Username</ControlLabel></Col>
          <Col sm={10}>
            <FormControl type="text" value={this.state.username}
              onChange={e => this.onChange('username', e.target.value)}
              disabled={this.props.disabled}
            />
          </Col>
        </FormGroup>
        <FormGroup controlId="password">
          <Col sm={2}><ControlLabel>Password</ControlLabel></Col>
          <Col sm={10}>
            <FormControl type="text" value={this.state.password}
              onChange={e => this.onChange('password', e.target.value)}
              disabled={this.props.disabled}
            />
          </Col>
        </FormGroup>
        <Button bsStyle="primary" type="submit"
          onClick={e => this.onSubmit(e)} disabled={this.props.disabled}>
          Login
        </Button>
      </Form>
    )
  }
}
