import React, { Component } from 'react';
import Designer from '../../src/Designer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setRoomDesign, getRooms } from '../../../rooms/actions/rooms.action';

export default class Designing extends Component {
  componentWillMount() {
    if(Object.keys(this.props.rooms).length === 0) {
      this.props.getRooms();
    }
  }

  state = {
    objects: [{
      "width": 300,
      "height": 245,
      "rotate": 0,
      "strokeWidth": 0,
      "fill": "#424242",
      "radius": "0",
      "blendMode": "normal",
      "type": "rectangle",
      "x": 10,
      "y": 5
    }, {
      "width": 330,
      "height": 245,
      "rotate": 0,
      "strokeWidth": 0,
      "fill": "#424242",
      "radius": "0",
      "blendMode": "normal",
      "type": "rectangle",
      "x": 369,
      "y": 3
    }, {
      "width": 300,
      "height": 350,
      "rotate": 0,
      "strokeWidth": 0,
      "fill": "rgba(241, 97, 99, 1)",
      "radius": "0",
      "blendMode": "normal",
      "type": "rectangle",
      "x": 10,
      "y": 262
    }, {
      "width": 143,
      "height": 160,
      "rotate": 0,
      "strokeWidth": 0,
      "fill": "rgba(255, 241, 0, 1)",
      "radius": "0",
      "blendMode": "normal",
      "type": "rectangle",
      "x": 190,
      "y": 16
    }]
  }

  handleUpdate(objects) {
    console.log(this.props)
    this.setState({objects});
    this.props.setRoomDesign(objects)
  }

  render() {
    var currentRoom = "living room"
    if(this.props.roomSelected) {
      roomSelected = this.props.roomSelected
    }
    console.log(this.props)
    console.log(currentRoom)
    if (this.props.rooms[currentRoom].design) {
      this.state = this.props.rooms[currentRoom].design
    }
    return (
      <Designer
        width={800} height={600}
        objects={this.state.objects}
        onUpdate={this.handleUpdate.bind(this)}/>
    );
  }
}

function mapStateToProps({ roomSelected, rooms }) {
  return { roomSelected, rooms };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setRoomDesign, getRooms }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Designing);
