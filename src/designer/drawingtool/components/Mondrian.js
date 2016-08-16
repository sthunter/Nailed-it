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
        this.state.objects.push({
          "width": this.props.rooms[this.props.roomSelected].furniture[furnitureNames[furnitureNames.length - i - 1]].width || 20,
          "height": this.props.rooms[this.props.roomSelected].furniture[furnitureNames[furnitureNames.length - i - 1]].length || 20,
          "rotate": 0,
          "strokeWidth": 0,
          "fill": this.props.rooms[this.props.roomSelected].color.hex || "#ffffff",
          "radius": "0",
          "blendMode": "normal",
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
    return (
      <Designer 
        width={800 || this.props.rooms[this.props.roomSelected].width} height={600 || this.props.rooms[this.props.roomSelected].length}
        objects={this.state.objects}
        onUpdate={this.handleUpdate.bind(this)}
        style={{"border": "1px solid black"}}/>
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
