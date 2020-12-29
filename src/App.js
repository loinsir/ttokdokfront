import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './components/main/MainBookSlider';
import MainBookSlider from './components/main/MainBookSlider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://cdn.pixabay.com/photo/2017/09/11/15/34/animals-2739386_960_720.jpg" className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MainBookSlider></MainBookSlider>
      </div>
    );
  }
}

export default App;
