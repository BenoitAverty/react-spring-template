import React from 'react'
import {Button, FormControl, FormGroup, ControlLabel, Row, Col} from 'react-bootstrap'

export default () => (
  <div>
    <h2>Api test</h2>
    <Row>
      <Col sm={3}>
        <ControlLabel>GET /api/greetings</ControlLabel>
        <Button bsStyle="primary">Perform request</Button>
      </Col>
      <Col sm={9}>
        <FormGroup>
          <ControlLabel>Server response</ControlLabel>
          <FormControl componentClass="textarea" />
        </FormGroup>
      </Col>
    </Row>
  </div>
)
