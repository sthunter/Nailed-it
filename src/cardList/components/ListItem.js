import React, { Component } from 'react';
import { Row, Col, Card } from 'react-materialize';
import './cardList.css';


class ListItem extends Component {
  render() {
    return (
      <Row>
        <Col s={6}>
          <Card
            className='blue-grey darken-1'
            title={this.props.title}
            textClassName='white-text'
          >
            <p>description</p>
          </Card>
        </Col>
      </Row>
      );
  }
};

export default ListItem;