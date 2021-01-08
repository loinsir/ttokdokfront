import React, { Component } from 'react';
import './App.css';
import './components/main/MainBookSlider';
import MainBookSlider from './components/main/MainBookSlider';
import { BrowserRouter, Route, Link, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <img className="App-header-img" src="https://cdn.pixabay.com/photo/2017/09/11/15/34/animals-2739386_960_720.jpg" alt="logo"/>
          <Link to="/" className="anchor"><h1 id="mainTitle">똑똑?</h1></Link>
          <Switch>
            <Route exact path="/" component={MainBookSlider}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
