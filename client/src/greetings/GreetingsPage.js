import React from 'react'
import {connect} from 'react-redux'
import {Button, FormControl, FormGroup, ControlLabel, Row, Col} from 'react-bootstrap'

import {getGreetings} from './greetingsReducer'

import './GreetingsPage.css'

export class GreetingsPage extends React.Component {
  constructor() {
    super()

    this.state = {
      namedGreetingsParameter: ''
    }
  }

  handleNameChange(event) {
    this.setState({ namedGreetingsParameter: event.target.value })
  }

  render() {
    return (
      <div className="Greetings">
        <h2>Api test</h2>
        <Row>
          <Col sm={4}>
            <ControlLabel>GET /api/greetings</ControlLabel>
            <Button bsStyle="primary" onClick={() => this.props.getGreetings()}>Perform request</Button>
          </Col>
          <Col sm={8}>
            <FormGroup>
              <ControlLabel>Server response</ControlLabel>
              <FormControl componentClass="textarea" value={this.props.simpleGreetingsResponse} />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <ControlLabel>GET /api/greetings/{'{name}'}</ControlLabel>
            <FormControl type="text" placeholder="{name}" value={this.state.namedGreetingsParameter} onChange={this.handleNameChange.bind(this)} />
            <Button
              bsStyle="primary"
              onClick={() => this.props.getGreetings(this.state.namedGreetingsParameter)}
              disabled={!this.state.namedGreetingsParameter}
            >
              Perform request
            </Button>
          </Col>
          <Col sm={8}>
            <FormGroup>
              <ControlLabel>Server response</ControlLabel>
              <FormControl componentClass="textarea" value={this.props.namedGreetingsResponse} />
            </FormGroup>
          </Col>
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    simpleGreetingsResponse: state.greetings.simpleGreetingsResponse,
    namedGreetingsResponse: state.greetings.namedGreetingsResponse
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getGreetings: param => dispatch(getGreetings(param))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(GreetingsPage)
