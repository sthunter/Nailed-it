import React, { Component } from 'react';
import { Button, Col, Row } from 'react-materialize';
import { reduxForm } from 'redux-form';
import { updateRoomDetails } from '../actions/rooms.action.js';
import RaisedButton from 'material-ui/RaisedButton';

class UpdateRoomForm extends Component {
  render() {
    const { fields: { size, notes }, handleSubmit, title, rooms, updateRoomDetails } = this.props;
    const details = rooms[title];
  
    return (
      <form onSubmit={handleSubmit(updateRoomDetails.bind(null, title, details))}  className="updateRoomForm" style={{"display":"inline-block"}} >
               
        <Row className="updateRoomField">
          <Col s={12}>
            <p>Size: </p><input type="text" validate {...size}/>
          </Col>
        </Row>

        <Row className="updateRoomField">
          <Col s={12}>
            <p>Notes: </p><input type="text" validate  {...notes}/>
          </Col>
        </Row>
        <RaisedButton label="Edit" type="submit"/>

      </form>
    );
  }
}

export default reduxForm({
  form: 'UpdateRoomForm',
  fields: ['size', 'notes'],
}, state => ({ roomSelected: state.roomSelected, rooms: state.rooms }), { updateRoomDetails })(UpdateRoomForm);
