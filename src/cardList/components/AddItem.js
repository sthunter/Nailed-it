import React, { Component } from 'react';
import { Row, Col, Card, Button, Modal } from 'react-materialize';
import './cardList.css';
import AddRoom from './Modal';

class AddItem extends Component {
  render() {
    return (
        <Row> 
          <Col s={6}>
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
                <AddRoom />
                <
            </Modal>


            </Card>
          </Col>
        </Row>  
      );
  }
};

export default AddItem;