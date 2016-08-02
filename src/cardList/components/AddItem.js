import React, { Component } from 'react';
import { Card, Button, Modal } from 'react-materialize';
import './cardList.css';
import AddRoom from './AddRoom';
import AddFurniture from './AddFurniture';
import FurnitureDetail from '../../furniture/components/FurnitureDetail';

class AddItem extends Component {

  render() {
    const header = this.props.view === 'room' ? 'Add a room' : 'Add a piece of furniture';
    const actions = [<Button waves='light' modal='close' flat >Submit</Button>, <Button waves='light' modal='close' flat>Close</Button>];
    const form = this.props.view === 'room' ? <AddRoom /> : <AddFurniture/>;

    return (
      <Card className="grey lighten-4 center-align">

        <Modal
          header={header}
          actions={actions}
          trigger={
            <Button floating large
              centered="true"
              className="grey lighten-1"
              waves="light"
              icon="add"
            />
          }
        >
          <div>
            {/* form */}
          </div>
        </Modal>
      </Card>
    );
  }
};

export default AddItem;
