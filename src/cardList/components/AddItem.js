import React, { Component } from 'react';
import { Card, Button, Modal } from 'react-materialize';
import './cardList.css';
import AddRoom from './AddRoom';
import AddFurniture from './AddFurniture';
import FurnitureDetail from '../../furniture/components/FurnitureDetail';

class AddItem extends Component {
  render() {
    return (
      <div>
        {this.props.view === 'room' ?
          <AddRoom /> :
          <AddFurniture />
        }
      </div>
    );
  }
};

export default AddItem;
