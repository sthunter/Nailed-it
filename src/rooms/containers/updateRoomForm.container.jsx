import React, { Component } from 'react';
import { Button, Col, Row } from 'react-materialize';
import { reduxForm } from 'redux-form';
import { updateRoomDetails } from '../actions/rooms.action.js';
import RaisedButton from 'material-ui/RaisedButton';

class UpdateRoomForm extends Component {

  render() {
    const { fields: { size, notes, photoURL }, handleSubmit, title, rooms, updateRoomDetails } = this.props;
    const details = rooms[title];
  
    return (
      <form onSubmit={handleSubmit(updateRoomDetails.bind(null, title, details))}  className="updateRoomForm" style={{"display":"inline-block"}} >
        <Row className="updateRoomField">
          <Col s={12}>
            <p>Size: </p><input className="updateRoomTextField" type="text" validate {...size}/>
          </Col>
        </Row>
        <Row className="updateRoomField">
          <Col s={12}>
            <p>Notes: </p><input className="updateRoomTextField" type="text" validate  {...notes}/>
          </Col>
        </Row>
        <Row className="updateRoomField">
          <Col s={12}>
            <p>Photo Url: </p><input className="updateRoomTextField" type="text" validate  {...photoURL}/>
          </Col>
        </Row>
        <RaisedButton label="Submit" type="submit" />
      </form>
    );
  }
}

export default reduxForm({
  form: 'UpdateRoomForm',
  fields: ['size', 'notes', 'photoURL'],
}, state => ({ roomSelected: state.roomSelected, rooms: state.rooms }), { updateRoomDetails })(UpdateRoomForm);

