import React,{ Component } from 'react';
import {Button, Input} from 'react-materialize';

class AddRoom extends Component {

  render() {

    return (
      <div>
       <Input placeholder="Room Name" s={12} label="Room Name1" />
       <Input placeholder="Room Name" s={12} label="Room Name2" />
       <Input placeholder="Room Name" s={12} label="Room Name3" />
       <Input placeholder="Room Name" s={12} label="Room Name4" />
       <Input placeholder="Room Name" s={12} label="Room Name5" />
       <Input placeholder="Room Name" s={12} label="Room Name6" />
       <Input placeholder="Room Name" s={12} label="Room Name7" />
       </div>


      )
  }
}

export default AddRoom;