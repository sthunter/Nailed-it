import React, { Component } from 'react';
import { Card } from 'react-materialize';
import { Link } from 'react-router';


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
    const lists = this.props.lists
    const listNames = Object.keys(lists.rooms);

    return (
      <Link to={"publicRoom"}>
        <Card
          onClick={() => {this.handleClick(title)}}
          className='grey lighten-2'
          title={ title }
          textClassName='black-text'
        >
          <p >
            Plans to spend: {lists.budget}$
          </p>
          <p>
          Rooms:{" "}
            {listNames.map((itemName) => {
              var photoURL = lists.rooms[itemName].photoURL.url
              console.log(photoURL)
              return (
                <span>
                 {itemName},{" "}
                 <img
                   src={photoURL}
                 /> 
                </span>
              );
            })}
        </p>
        </Card>
      </Link>
      );
  }
}

export default ListItem;
