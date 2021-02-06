import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/main/BookCarousel';
import TopNavBar from './components/TopNavBar';
import Main from './components/main/Main';

class App extends Component {
  render() {
    return (
        <div className="App">
          <TopNavBar></TopNavBar>
          <Main></Main>
        </div>
    );
  }
}

export default App;
