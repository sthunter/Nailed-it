import React, { Component } from 'react';
import { Button, Input, Col, Row } from 'react-materialize';
import { reduxForm } from 'redux-form';
import { updateRoom } from '../actions/rooms.action.js';

class UpdateRoomForm extends Component {
  render() {
    const { fields: { roomName, size, notes }, handleSubmit, roomSelected, rooms, updateRoom } = this.props;
    const details = rooms[roomSelected];

    return (
      <form onSubmit={ handleSubmit(updateRoom.bind(null, roomSelected, details)) } >
        <Col s={12}>
          <Row>
            <Input type="text" placeholder="Room Name" s={6} label="Room Name" defaultValue={ roomSelected } { ...roomName } />
            <Input type="text" placeholder="Size" s={6} label="Size" defaultValue={ details.size } { ...size } />
          </Row>
          <Row>
            <div class="input-field col s12">
              <label for="textarea1">Notes</label>
              <textarea id="textarea1" className="materialize-textarea" placeholder="Notes" defaultValue={ details.notes } { ...notes }></textarea>
            </div>
          </Row>
        </Col>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'UpdateRoomForm',
  fields: ['roomName', 'size', 'notes'],
}, state => ({ roomSelected: state.roomSelected, rooms: state.rooms }), { updateRoom })(UpdateRoomForm);
