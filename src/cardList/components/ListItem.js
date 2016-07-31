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
    // this.props.clickHandler('the other ballpit');
    //  onClick={}
    const title = this.props.title;
    return (
          <Card
            onClick={() => {this.handleClick(title)}}
            className='blue-grey darken-1'
            title={ title }
            textClassName='white-text'
          >
            <p >
              description
            </p>
          </Card>
      );
  }
}

export default ListItem;