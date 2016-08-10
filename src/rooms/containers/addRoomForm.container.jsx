import React, { Component } from 'react';
import { Button, Input, Col, Row } from 'react-materialize';
import { reduxForm } from 'redux-form';
import { addRoom } from '../actions/rooms.action.js';

class AddRoomForm extends Component {
  render() {
    const { fields: { roomName, size, notes }, handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit(this.props.addRoom) } >
        <Col s={12}>
          <Row>
            <Input type="text" placeholder="Room Name" s={6} label="Room Name" { ...roomName } />
            <Input type="text" placeholder="Size" s={6} label="Size" { ...size } />
          </Row>
          <Row>
            <div class="input-field col s12">
              <label for="textarea1">Notes</label>
              <textarea id="textarea1" className="materialize-textarea" placeholder="Notes" { ...notes }></textarea>
            </div>
          </Row>
        </Col>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'AddRoomForm',
  fields: ['roomName', 'size', 'notes'],
}, null, { addRoom })(AddRoomForm);
