import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/main/BookCarousel';
import TopNavBar from './components/TopNavBar';
import Main from './components/main/Main';
import SideBar from './components/SideBar';

class App extends Component {
  render() {
    return (
        <div className="App">
          <TopNavBar></TopNavBar>
          <SideBar></SideBar>
          <Main></Main>
        </div>
    );
  }
}

export default App;