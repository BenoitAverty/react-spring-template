import React from 'react'

import {Nav, NavItem} from 'react-bootstrap'
import {IndexLinkContainer,LinkContainer} from 'react-router-bootstrap'

import logo from './logo.svg'
import './App.css'

const App = (props) => {
  return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-menu">
          <Nav bsStyle="tabs">
            <IndexLinkContainer to="/"><NavItem>Home</NavItem></IndexLinkContainer>
            <LinkContainer to="/login"><NavItem>Login</NavItem></LinkContainer>
          </Nav>
        </div>
        <div className="App-content">
          {props.children}
        </div>
      </div>
  );
}

export default App;
