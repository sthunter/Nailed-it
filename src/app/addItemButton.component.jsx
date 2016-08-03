import React, { Component } from 'react';
import AddRoomForm from '../rooms/containers/addRoomForm.container.jsx';
import AddFurnitureForm from '../furniture/containers/addFurnitureForm.container.jsx';

class AddItemButton extends Component {
  render() {
    return (
      <div>
        {this.props.view === 'room' ?
          <AddRoomForm /> :
          <AddFurnitureForm />
        }
      </div>
    );
  }
};

export default AddItemButton;
