import React, { Component } from 'react';
import './rooms.css';

class RoomsList extends Component {
  render() {
    return (
      <div className="RoomsList">
        <h2>RoomsList Component</h2>
        <p className="RoomsList--intro">
          This should be a list of rooms! We'll need some sort of Card component, probably.
        </p>
      </div>
    );
  }
}

export default RoomsList;
