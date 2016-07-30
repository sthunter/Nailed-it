import React, { Component } from 'react';
import RoomsList from '../rooms/containers/roomsList.container';

export default class Content extends Component {
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