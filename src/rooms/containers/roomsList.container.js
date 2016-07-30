import React, { Component } from 'react';
import { connect} from 'react-redux';
import CardList from '../../cardList/components/CardList';
import { addRoom, roomSelected } from '../actions/rooms.action';
import { bindActionCreators } from 'redux';
import database from '../../database';
const rooms = database.rooms;

class RoomsList extends Component {
  componentWillMount() {
    const _this = this;
    rooms.forEach(room => _this.props.addRoom(room.name));
  }

  render() {
    return (
      <CardList
        intro={this.props.roomSelected} list={this.props.rooms} clickHandler={this.props.roomSelected} />
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