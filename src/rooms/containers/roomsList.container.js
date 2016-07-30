import React, { Component } from 'react';
import { connect} from 'react-redux';
import CardList from '../../cardList/components/CardList';
import { addRoom, selectRoom } from '../actions/rooms.action';
import { bindActionCreators } from 'redux';
import database from '../../database';
const rooms = database.rooms;

class RoomsList extends Component {
  componentWillMount() {
    const _this = this;
    rooms.forEach(room => _this.props.addRoom(room));
  }

  render() {
    return (
      <div>
        <h3>Room selected: {this.props.roomSelected || 'No room selected yet'}</h3>
        <CardList
          clickHandler={this.props.selectRoom}
          intro={this.props.roomSelected}
          list={this.props.rooms}
          store={this.props.store}
        />
      </div>
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
  return bindActionCreators({ addRoom, selectRoom }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsList);