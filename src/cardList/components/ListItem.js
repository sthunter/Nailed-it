import React, { Component } from 'react';
import { Row, Col, Card } from 'react-materialize';
import './cardList.css';


class ListItem extends Component {
  handleClick = (title) => {
    if (this.props.clickHandler) {
      this.props.clickHandler(title);
    }
  }

  render() {
    this.props.clickHandler('the other ballpit');
    //  onClick={}
    return (
      <Row>
        <Col s={12} m={6} l={6}>
          <Card

            className='blue-grey darken-1'
            title={this.props.title}
            textClassName='white-text'
          >
            <p onClick={() => {console.log('clicked!')}}>
              description
            </p>
          </Card>
        </Col>
      </Row>
      );
  }
}

export default ListItem;