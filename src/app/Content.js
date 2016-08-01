import React, { Component } from 'react';
import RoomsList from '../rooms/containers/roomsList.container';

export default class Content extends Component {
  render() {
    return (
      <div>
        <RoomsList store={this.props.store} />
      </div>
    );
  }
}