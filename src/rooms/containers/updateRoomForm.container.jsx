import React, { Component } from 'react';
import { Button, Input, Col, Row } from 'react-materialize';
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
            <p>Size: </p><Input type="text" validate placeholder={details.size ? details.size : "no size entered"} {...size}/>
          </Col>
        </Row>

        <Row className="updateRoomField">
          <Col s={12}>
            <p>Notes: </p><Input type="text" validate placeholder={details.notes ? details.notes : "no details entered"} {...notes}/>
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
