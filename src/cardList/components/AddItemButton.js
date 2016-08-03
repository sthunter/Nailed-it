import React, { Component } from 'react';
import { Card, Button, Modal } from 'react-materialize';
import './cardList.css';
import AddRoomForm from './AddRoomForm';
import AddFurnitureForm from './AddFurnitureForm';
import FurnitureDetail from '../../furniture/components/FurnitureDetail';

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
