import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import FamousPerson from '../FamousPerson/FamousPerson';

class App extends Component {
  state = {
    person: {
      name: '',
      role: ''
    },
    people: [
      { name: 'firstPerson', role: 'firstRole' },
      { name: 'secondPerson', role: 'secondPerson' }
    ]
  }
  handleChange = (propertyName) => {
    return ((event) => {
      console.log(`In handler: `, event.target.value);
      this.setState({
        person: {
          ...this.state.person, [propertyName]: event.target.value
        }
      })
    });
  }
  handleClick = (event) => {
    console.log('the values of state are:', this.state);
    this.setState({ people: [...this.state.people, this.state.person] });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <FamousPerson
          person={this.state.person}
          people={this.state.people}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
           />
      </div>
    );
  }
}

export default App;