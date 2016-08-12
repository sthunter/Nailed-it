import React, { Component } from 'react';
import Designer from '../src/Designer';

import { setRoomDesign, getRooms, selectRoom } from '../../rooms/actions/rooms.action';

export default class Designing extends Component {
  currentRoom = this.props.currentRoom

  componentDidMount() {
    if(Object.keys(this.props.rooms).length === 0) {
      this.props.getRooms();
    }

  }

  state = (this.props.rooms[this.currentRoom] && this.props.rooms[this.currentRoom].design)  ?
    { objects: this.props.rooms[this.props.roomSelected].design } :
     { objects: [{
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
    this.props.setRoomDesign(objects, this.currentRoom)
  }

  render() {
    this.currentRoom = this.props.roomSelected || this.props.params.name
    if (this.props.rooms[this.currentRoom] && this.props.rooms[this.currentRoom].design ) {
      this.state.objects = this.props.rooms[this.currentRoom].design
    }
    console.log(this.currentRoom);

    return (
      <Designer 
        width={800} height={600}
        objects={this.state.objects}
        onUpdate={this.handleUpdate.bind(this)}/>
    );
  }
}
