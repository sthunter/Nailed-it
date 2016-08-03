import React, { Component } from 'react';
import AddRoomForm from '../containers/addRoomForm.container';
import AddFurnitureForm from '../containers/addFurnitureForm.container';

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
