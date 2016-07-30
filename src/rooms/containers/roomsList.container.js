import React, { Component } from 'react';
import { connect} from 'react-redux';
import CardList from '../../cardList/components/CardList';
import { addRoom, roomSelected } from '../actions/rooms.action';
import { bindActionCreators } from 'redux';
import { dummyRooms } from '../../database';

class RoomsList extends Component {
  componentWillMount() {
    this.props.addRoom('The Labohr-atohry');
    //this.rooms = require('../../database').default.rooms;
  }

  render() {
    const rooms = this.props.rooms;
    return (
      <CardList
        intro={this.props.roomSelected} list={this.rooms || this.props.rooms} clickHandler={this.props.roomSelected} />
    );
  }
}

function mapStateToProps(state) {
  return {
    rooms: state.rooms,
    roomSelected: state.roomSelected
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addRoom, roomSelected }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsList);