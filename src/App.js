import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/main/BookCarousel';
import TopBar from './components/TopBar';
import Main from './components/main/Main';
import FixedNavBar from './components/FixedNavBar';

class App extends Component {
  render() {
    return (
        <div className="App">
          <TopBar></TopBar>
          <FixedNavBar></FixedNavBar>
          <Main></Main>
        </div>
    );
  }
}

export default App;