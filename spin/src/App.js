import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let resturants = [
  {
    name: 'Berrynaked'
    //going to be adding more information
  },
  {
    name: "Blist'r naan wraps"
    //going to be adding more information
  }
]

// setting up the basic application layout
// testing a few things out
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  
  handleButtonClick() {
    console.log('hello');
  }
  
  render() {
    return (
      <div>
        <h1>Randomize your resturant selection</h1>
        <button onClick={this.handleButtonClick}>Spin</button>
        <Resturants />
      </div>
    );
  }
}

class Resturants extends React.Component {
  render() {
    return (
      // not sure how we want to setup our class naming convention
      <div className="spin--resturants"> 
        
      </div>
    );
  }
}

export default App;
