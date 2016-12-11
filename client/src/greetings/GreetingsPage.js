import React from 'react'
import {connect} from 'react-redux'
import {Button, FormControl, FormGroup, ControlLabel, Row, Col} from 'react-bootstrap'

import {getGreetings} from './greetingsReducer'

import './GreetingsPage.css'

export const Greetings = (props) => (
  <div className="Greetings">
    <h2>Api test</h2>
    <Row>
      <Col sm={3}>
        <ControlLabel>GET /api/greetings</ControlLabel>
        <Button bsStyle="primary" onClick={props.getGreetings}>Perform request</Button>
      </Col>
      <Col sm={9}>
        <FormGroup>
          <ControlLabel>Server response</ControlLabel>
          <FormControl componentClass="textarea" value={props.simpleGreetingsResponse} />
        </FormGroup>
      </Col>
    </Row>
  </div>
)


function mapStateToProps(state) {
  return {
    simpleGreetingsResponse: state.greetings.simpleGreetingsResponse
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getGreetings: () => dispatch(getGreetings())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Greetings)
