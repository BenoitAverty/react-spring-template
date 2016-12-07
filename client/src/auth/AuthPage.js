import React from 'react'
import {connect} from 'react-redux'

import {login} from './authReducer'

import LoginForm from './LoginForm'
import LoggedInWidget from './LoggedInWidget'
import './AuthPage.css'

function AuthPage(props) {
  if (props.username === '') {
    return <LoginForm
      onSubmit={props.onSubmit}
      disabled={props.loginInProgress}
           />
  }
  else {
    return <LoggedInWidget />
  }
}

const mapStateToProps = ({ username, loginInProgress }) => ({
  username,
  loginInProgress
})
function mapDispatchToProps(dispatch) {
  return {
    onSubmit: credentials => dispatch(login(credentials))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthPage)
