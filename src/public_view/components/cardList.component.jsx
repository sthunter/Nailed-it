import React, { Component } from 'react';
import ListItem from './listItem.component';
import { Col } from 'react-materialize';
//import { Row, Col, Modal, Button } from 'react-materialize';

class CardList extends Component {

  render() {
    const listNames = Object.keys(this.props.lists);
    return (
      <div className="CardList">
        <Col s={12}>
        {listNames.map((itemName) => {
          return (
            <ListItem
              key={ itemName }
              title={ itemName }
              lists={ this.props.lists[itemName] }
              clickHandler={ this.props.clickHandler }
            />
          );
        })}
        </Col>
      </div>
    );
  }
}

export default CardList;
