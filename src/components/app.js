import React, { Component } from 'react';
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import PortfolioContainer from './portfolio/portfolio-container';
import NavigationContainer from './navigation/navigation-container';
import Home from "./pages/home";
import About from "./pages/about";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
        <div>
          <NavigationContainer />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={ About } />
          </Switch>
        </div>
        </Router>


        <h1>Tania D'Angelo</h1>
        <h3>Software Programmer</h3>
        <div>{moment().format('MMMM Do YYYY')}</div>
        <PortfolioContainer />
      </div>
    );
  }
}
