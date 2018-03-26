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
        <Options />
        <button onClick={this.handleButtonClick}>Spin</button>
        <Restaurants />
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <label for="vege">Vegetarian</label>
        <input type="checkbox" id="vege"/>

        {/* <label></label>
        <input type="checkbox"/> */}

        <label for="dessert">Dessert</label>
        <input type="checkbox" id="dessert"/>
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
              <h3>{restaurant.name}</h3>
              <a href={restaurant.link} target="_blank">Learn more</a>
            </div>
          )
          })
        }
      </div>
    );
  }
}

export default App;
