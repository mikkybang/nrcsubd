import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Routes from './Routes'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <main>
          <Routes />
        </main>
          </div>
      </Router>
    );
  }
}

export default App;
