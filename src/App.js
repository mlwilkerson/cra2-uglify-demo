import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <FontAwesomeIcon icon={faCoffee}/>
          <FontAwesomeIcon icon={faBell}/>
          <FontAwesomeIcon icon={faFontAwesome}/>
        </p>
      </div>
    );
  }
}

export default App;
