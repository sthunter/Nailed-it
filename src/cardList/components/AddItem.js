import React, { Component } from 'react';
import { Row, Col, Card, Button} from 'react-materialize';
import './cardList.css';

class AddItem extends Component {
  render() {
    return (
        <Row> 
          <Col s={6}>
            <Card className="blue-grey lighten-1 center-align">
            
              <Button floating large  
              centered="true"
              className="grey" 
              waves="light" 
              icon="add"/>


            </Card>
          </Col>
        </Row>  
      );
  }
};

export default AddItem;