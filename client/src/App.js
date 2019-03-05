import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Routes from './Routes'
import Admin from './components/Admin/Admin'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const pathname = window.location.pathname
    return (
      <div>
      <Router>
      
        <div>
        { !pathname.includes('admin') ? '' : <Admin /> }
        <main>
          <Routes />
        </main>
          </div>
      </Router>
      </div>
    );
  }
}

export default App;
