import React, { Component } from 'react';
import { connect} from 'react-redux';
import CardList from '../../cardList/components/CardList';
import { addRoomFromDb, selectRoom } from '../actions/rooms.action';
import { bindActionCreators } from 'redux';
// import database from '../../database';
import { Row, Col} from 'react-materialize';
import BudgetView from '../../BudgetView/containers/BudgetView';
import { getRooms } from '../../databaseAPI';

// const rooms = database.rooms;

export default class RoomsList extends Component {
  componentWillMount() {
    const _this = this;
    // const roomNames = Object.keys(rooms);
    // roomNames.forEach(roomName => {
    //   const newRoom = {};
    //   newRoom[roomName] = rooms[roomName];
    //   return _this.props.addRoom(newRoom);
    // });
    getRooms(_this.props.addRoomFromDb);
  }

  render() {
    return (
      <Row>
        <Col s={12} m={6} l={6}>
          <div>
            <h3>Room selected: {this.props.roomSelected || 'No room selected'}</h3>
            <CardList
              clickHandler={this.props.selectRoom}
              intro={this.props.roomSelected}
              list ={this.props.rooms}
              view="rooms"
            />
          </div>
        </Col>

        <Col s={12} m={6} l={6}>
          <h3>Budget Chart / Graph</h3>
          <BudgetView 
            rooms={this.props.rooms}/>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps({ rooms, roomSelected }) {
  return { rooms, roomSelected };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addRoomFromDb, selectRoom }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsList);
