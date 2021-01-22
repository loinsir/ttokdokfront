import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/main/MainBookSlider';
import MainBookSlider from './components/main/MainBookSlider';
import Detail from './components/detail/Detail';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import TopNavBar from './components/TopNavBar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <TopNavBar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={MainBookSlider}/>
            <Route exact path="/detail:ISBN" component={Detail}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
