import React, { Component } from 'react';
import RoomsList from '../rooms/containers/roomsList.container';
import FurnitureList from '../furniture/containers/furnitureList.container';

export default class Content extends Component {
  render() {
    return (
      <div>
        <RoomsList />
        <FurnitureList />
      </div>
    );
  }
}