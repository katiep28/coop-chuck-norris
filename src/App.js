import React from 'react';
import logo from './logo.svg';
import './App.css';


const axios = require('axios');

class App extends React.Component {

  state = {
  }
  render() {

   return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Katies React App
        </a>
      </header>
    </div>
  );
}
}

export default App;
