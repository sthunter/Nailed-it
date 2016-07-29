import React, { Component } from 'react';
import { connect} from 'react-redux';

class RoomsList extends Component {
  render() {

  }
}

function mapStateToProps(state) {
  return {
    rooms: state.rooms
  };
}

export default connect(mapStateToProps)(RoomsList);