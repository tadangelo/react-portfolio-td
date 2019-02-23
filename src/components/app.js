import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import moment from "moment";


import NavigationContainer from './navigation/navigation-container';
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioDetail from "./portfolio/portfolio-detail";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
        <div>
          <h1>Tania D'Angelo</h1>
          <h3>Software Programmer</h3>
          <div>{moment().format('MMMM Do YYYY')}</div>
          <NavigationContainer />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={ About } />
            <Route path="/contact" component={ Contact } />
            <Route path="/blog" component={ Blog } />
            <Route path="/portfolio/:slug" component={ PortfolioDetail } />
          </Switch>
        </div>
        </Router>
      </div>
    );
  }
}
