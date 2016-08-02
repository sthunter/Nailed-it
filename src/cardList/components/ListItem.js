import React, { Component } from 'react';
import { Card } from 'react-materialize';
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
            className='grey lighten-2'
            title={ title }
            textClassName='black-text'
          >
            <p >
              description
            </p>
          </Card>
      );
  }
}

export default ListItem;