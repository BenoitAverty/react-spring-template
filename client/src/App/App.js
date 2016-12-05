import React from 'react'

import {Link} from 'react-router'

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
          <ul>
            <li><Link to="/">Main</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
        <div className="App-content">
          {props.children}
        </div>
      </div>
  );
}

export default App;
