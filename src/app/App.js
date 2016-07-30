import React, { Component } from 'react';
import './App.css';
import RoomsList from '../rooms/containers/roomsList.container';

//import CardList from '../cardList/components/CardList';
//import logo from './logo.svg';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <RoomsList store={this.props.store} />
      </div>
    );
  }

}
        // <img src={logo} className="App-logo" alt="logo" />
