import React, { Component } from 'react';
import Designer from '../../src/Designer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setRoomDesign, getRooms, selectRoom, updateRoomDesign } from '../../../rooms/actions/rooms.action';
import { changeRoute } from '../../../routing/actions/routing.action';

export default class Designing extends Component {
  currentRoom = "bathroom"

  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.roomSelected !== nextProps.roomSelected) {
      this.props.updateRoomDesign(this.state.objects, this.props.roomSelected)
      return true;
    }
    return true;
  }
  
  componentDidMount() {
    if(Object.keys(this.props.rooms).length === 0) {
      this.props.getRooms();
    }
  }

  componentWillUnmount() {
    this.props.updateRoomDesign(this.state.objects, this.props.roomSelected)
  }

  // state = { objects: [{
  //     "title": "chair",
  //     "width": 300,
  //     "height": 245,
  //     "rotate": 0,
  //     "strokeWidth": 0,
  //     "fill": "#424242",
  //     "radius": "0",
  //     "blendMode": "normal",
  //     "type": "rectangle",
  //     "x": 10,
  //     "y": 5
  //   }, {
  //     "title": "table",
  //     "width": 330,
  //     "height": 245,
  //     "rotate": 0,
  //     "strokeWidth": 0,
  //     "fill": "#424242",
  //     "radius": "0",
  //     "blendMode": "normal",
  //     "type": "rectangle",
  //     "x": 369,
  //     "y": 3
  //   }, {
  //     "title": "bottle"
  //     "width": 300,
  //     "height": 350,
  //     "rotate": 0,
  //     "strokeWidth": 0,
  //     "fill": "rgba(241, 97, 99, 1)",
  //     "radius": "0",
  //     "blendMode": "normal",
  //     "type": "rectangle",
  //     "x": 10,
  //     "y": 262
  //   }, {
  //     "title": "armrest"
  //     "width": 100,
  //     "height": 160,
  //     "rotate": 0,
  //     "strokeWidth": 0,
  //     "fill": "rgba(255, 241, 0, 1)",
  //     "radius": "0",
  //     "blendMode": "normal",
  //     "type": "rectangle",
  //     "x": 190,
  //     "y": 16
  //   },
  //   {
  //     fill: "black",
  //     fontFamily: "Helvetica",
  //     fontSize: 50,
  //     fontStyle: "normal",
  //     fontWeight: "normal",
  //     rotate: 0,
  //     text: "armrest",
  //     textDecoration: "none",
  //     type: "text",
  //     x: 190,
  //     y: 16 
  //   }]
  // }
  state = (this.props.rooms[this.currentRoom] && this.props.rooms[this.currentRoom].design)  ?
    { objects: this.props.rooms[this.props.roomSelected].design } :
     { objects: [{
          "width": 20,
          "height": 20,
          "rotate": 0,
          "strokeWidth": 0,
          "fill": "#424242",
          "radius": "0",
          "blendMode": "normal",
          "type": "rectangle",
          "x": 10,
          "y": 5
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

    if(!this.props.rooms[this.props.roomSelected].furniture) {
      return (
        <Designer 
          width={800} height={600}
          objects={[{
            fill: "rgba(80, 80, 86, 1)",
            fontFamily: "Helvetica",
            fontSize: 50,
            fontStyle: "italic",
            fontWeight: "normal",
            rotate: 0,
            stroke: "rgba(80, 80, 86, 1)",
            text: "Please add your furniture",
            textDecoration: "none",
            type: "text",
            x: 403,
            y: 236
          }]}
          onUpdate={this.handleUpdate.bind(this)}/>
      );
    }
    if(this.state.objects.length < Object.keys(this.props.rooms[this.props.roomSelected].furniture).length) {
      var counter = Object.keys(this.props.rooms[this.props.roomSelected].furniture).length - this.state.objects.length;  
      for (var i = 0; i < counter; i++ ) {
        this.state.objects.push({
          "width": 20,
          "height": 20,
          "rotate": 0,
          "strokeWidth": 0,
          "fill": "#424242",
          "radius": "0",
          "blendMode": "normal",
          "type": "rectangle",
          "x": 10,
          "y": 5
        })
      }
    }
    return (
      <Designer 
        width={800} height={600}
        objects={this.state.objects}
        onUpdate={this.handleUpdate.bind(this)}/>
    );
  }
}

function mapStateToProps({ roomSelected, rooms, route }) {
  return { roomSelected, rooms, route };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setRoomDesign, selectRoom, getRooms, changeRoute, updateRoomDesign }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Designing);
