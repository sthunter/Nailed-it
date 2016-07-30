import React,{ Component } from 'react';
import {Button, Input} from 'react-materialize';
import { reduxForm } from 'redux-form';
import { addRoom } from '../../rooms/actions/rooms.action'

class AddRoom extends Component {

  render() {
    const { fields: { roomName } , handleSubmit } = this.props;
    // const handleSubmit = this.props.handleSubmit;
    // const roomName = this.props.fields.roomName;
    return (
      <form onSubmit = { handleSubmit(this.props.addRoom) } >
        <Input type="text" placeholder="Room Name" s={12} label="Room Name" { ...roomName } />
        <button type="submit">Submit</button>
      </form>


      )
  }
}

export default reduxForm({
  form: 'AddRoomForm',
  fields: ['roomName'],
}, null, { addRoom } )(AddRoom);