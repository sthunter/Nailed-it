import React,{ Component } from 'react';
import {Button, Input} from 'react-materialize';
import { reduxForm } from 'redux-form';
import { addRoom } from '../../rooms/actions/rooms.action'

class AddRoomForm extends Component {
  render() {
    const { fields: { roomName } , handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit(this.props.addRoom) } >
        <Input type="text" placeholder="Room Name" s={12} label="Room Name" { ...roomName } />
        <Button type="submit">Submit</Button>
      </form>
      )
  }
}

export default reduxForm({
  form: 'AddRoomForm',
  fields: ['roomName']
}, null, {addRoom})(AddRoomForm);
