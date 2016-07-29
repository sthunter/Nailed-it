import React, { Component } from 'react';
import { connect} from 'react-redux';
import CardList from '../../cardList/components/CardList';
import { addRoom, roomSelected } from '../actions/rooms.action';
import { bindActionCreators } from 'redux';

const cardListIntro = 'This should be a list of rooms, or furniture, or something!';

class RoomsList extends Component {
  componentWillMount() {
    this.rooms = require('../../database').default.rooms;
  }

  render() {
    const rooms = this.props.rooms;
    return (
      <CardList intro={cardListIntro} list={this.rooms || this.props.rooms} clickHandler={this.props.roomSelected} />
    );
  }
}

function mapStateToProps(state) {
  return {
    rooms: state.rooms
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addRoom, roomSelected }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsList);