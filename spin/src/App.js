import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import restaurants from './restaurants';

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
        <h1>Randomize your restaurant selection</h1>
        <button onClick={this.handleButtonClick}>Spin</button>
        <Restaurants />
      </div>
    );
  }
}

class Restaurants extends React.Component {
  render() {
    return (
      <Restaurant />
    );
  }
}

class Restaurant extends React.Component {
  render() {
    return (
      <div className="spin__restaurants">
        {
          restaurants.map((restaurant) => {
          return (
            <div className="spin__restaurant" key={restaurant.name}>
              <img className="spin__restaurant--image" src={restaurant.image} alt={restaurant.name} />
              <h2>{restaurant.name}</h2>
            </div>
          )
          })
        }
      </div>
    );
  }
}

export default App;
