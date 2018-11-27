import React, { Component } from 'react';
// import logo from './logo.svg';
import '../FamousPerson/FamousPerson';
import './App.css';
import FamousPerson from '../FamousPerson/FamousPerson';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React--Famous People!</h1>
        <FamousPerson />
      </div>
    );
  }
}

export default App;
