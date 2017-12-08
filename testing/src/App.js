import React, { Component } from 'react';
import TestList from './TestList'
import logo from './logo.svg';
import './App.css';


class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Eddy Testing with Nightmare JS</h1>
        </header>
        <p className="App-intro">
          To get started, start the front end using npm start / yarn start, then type the following into the ternimal:
        </p>
        <TestList />
      </div>
    );
  }
}

export default App;
