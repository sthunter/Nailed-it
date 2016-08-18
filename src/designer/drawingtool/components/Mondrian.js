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

  state = (this.props.rooms[this.currentRoom] && this.props.rooms[this.currentRoom].design)  ?
    { objects: this.props.rooms[this.props.roomSelected].design } :
     { objects: []
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
      var furnitureNames = Object.keys(this.props.rooms[this.props.roomSelected].furniture)
      var counter = Object.keys(this.props.rooms[this.props.roomSelected].furniture).length - this.state.objects.length; 
      for (var i = 0; i < counter; i++ ) {
        if(this.props.rooms[this.props.roomSelected].furniture[furnitureNames[furnitureNames.length - i - 1]].size) {
          var regLength = new RegExp("[0-9]+");
          var regWidth = new RegExp("[0-9]+$");
          var newLength = regLength.exec(this.props.rooms[this.props.roomSelected].furniture[furnitureNames[furnitureNames.length - i - 1]].size);
          var newWidth = regWidth.exec(this.props.rooms[this.props.roomSelected].furniture[furnitureNames[furnitureNames.length - i - 1]].size);          
        }
        this.state.objects.push({
          "width": newWidth ? +newWidth[0] : 20,
          "height": newLength ? +newLength[0] : 20,
          "rotate": 0,
          "strokeWidth": 0,
          "fill":  this.props.rooms[this.props.roomSelected].furniture[furnitureNames[furnitureNames.length - i - 1]].color || this.props.rooms[this.props.roomSelected].color.hex || "#ffffff",
          "radius": "0",
          "blendMode": "multiply",
          "type": "rectangle",
          "x": 10,
          "y": 5,
          text: furnitureNames[furnitureNames.length - i - 1],
          fontWeight: "normal",
          fontStyle: "normal",
          textDecoration: "none",
          fontSize: 50,
          fontFamily: "Helvetica"
        })
      }
    }
    
    var roomNewLength ="";
    var roomNewWidth = "";
    if(this.props.rooms[this.props.roomSelected].size) {
      var roomRegLength = new RegExp("[0-9]+");
      var roomRegWidth = new RegExp("[0-9]+$");
      roomNewLength = roomRegLength.exec(this.props.rooms[this.props.roomSelected].size);
      roomNewWidth = roomRegWidth.exec(this.props.rooms[this.props.roomSelected].size);
      roomNewLength = roomNewLength[0];
      roomNewWidth = roomNewWidth[0]; 
    }
    return (
      <Designer 
        width={ +roomNewWidth || 400} height={ +roomNewLength || 600}
        objects={this.state.objects}
        onUpdate={this.handleUpdate.bind(this)}
        roomSelected = {this.props.roomSelected}
        rooms = {this.props.rooms}
        />
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
