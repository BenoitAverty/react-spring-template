import React from 'react'
import {Form, FormGroup, FormControl, ControlLabel, Button, Col} from 'react-bootstrap'
import {connect} from 'react-redux'

import {login} from './authReducer'

import './AuthPage.css'

class AuthPage extends React.Component {

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
          <Button bsStyle="primary" type="submit" onClick={e => this.onSubmit(e)}>
            Login
          </Button>
        </Form>
        <p>props : {JSON.stringify(this.props)}</p>
      </div>
    )
  }
}

const mapStateToProps = ({ anonymous, username, loginInProgress }) => ({
  anonymous,
  username,
  loginInProgress
})
function mapDispatchToProps(dispatch) {
  return {
    onSubmit: credentials => dispatch(login(credentials))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthPage)
