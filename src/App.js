import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Smart Notes React App</h1>
        </header>
        <p className="App-intro">
		  We are still in process of building the app.
          To get started, edit <code>src/App.js</code> and save to reload.
		  Testing Now!!
        </p>
      </div>
    );
  }
}

export default App;
