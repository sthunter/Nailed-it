import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RoomsList from '../rooms/containers/roomsList.container';
//import CardList from '../cardList/components/CardList';

//const cardListIntro = 'This should be a list of rooms, or furniture, or something!';
//const roomsDummyData = [
//  'Living Room',
//  'Dungeon',
//  'Dining Room',
//  'Aviary',
//  'Ball Pit',
//];

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
