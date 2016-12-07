import React from 'react'
import {Button} from 'react-bootstrap'

export default function(props) {
  return (
    <div className="LoggedInWidget">
      <p>Logged in as {props.username} !</p>
      <Button bsStyle="primary" onClick={props.onLogout}>
        Log out
      </Button>
    </div>
  )
}
