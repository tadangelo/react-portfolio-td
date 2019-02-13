import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Tania D'Angelo</h1>
        <h3>Software Programmer</h3>
        <div>
          {moment().format('MMMM Do YYYY')}
        </div>
      </div>
    );
  }
}
