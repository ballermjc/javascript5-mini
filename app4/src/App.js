import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then(res => {
      let cars = (res.data);
      console.log(res.data);
      this.setState({
        cars: cars
      })
    })
  }

  render() {
    const cars = this.state.cars.map(car => {
      return (
        <h1 key={car.id}>{car.make} {car.model}</h1>
      )
    })
    return (
      <div className="App">
        <button onClick={() => this.getCars()}>Get cars</button>
        {cars}
      </div>
    );
  }
}

export default App;
