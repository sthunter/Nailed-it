import React, { Component } from 'react';
import { Card, Button, Modal } from 'react-materialize';
import './cardList.css';
import AddRoom from './Modal';

class AddItem extends Component {
  render() {
    const store = this.props.store;
    return (
                <Card className="blue-grey lighten-1 center-align">
              
            <Modal
              header="Modal Header"
              trigger={
                <Button floating large
                  centered="true"
                  className="grey"
                  waves="light"
                  icon="add"
                />
              }
            >
              <div>
                <AddRoom store={ store } />
              </div>
            </Modal>


            </Card>
      );
  }
};

export default AddItem;