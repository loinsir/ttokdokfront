import React, { Component } from 'react';
import './App.css';
import './components/main/MainBookSlider';
import MainBookSlider from './components/main/MainBookSlider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="App-header-img" src="https://cdn.pixabay.com/photo/2017/09/11/15/34/animals-2739386_960_720.jpg" alt="logo"/>
        <h1 id="mainTitle">똑똑?</h1>
        <p className="App-intro">
        </p>
        <MainBookSlider></MainBookSlider>
      </div>
    );
  }
}

export default App;
