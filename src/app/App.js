import React, { Component } from 'react';
import './App.css';
import Content from './Content';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header/>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Content store={this.props.store} />
      </div>
    );
  }
}
