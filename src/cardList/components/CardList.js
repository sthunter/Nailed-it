import React, { Component } from 'react';
import ListItem from './ListItem';
import './cardList.css';

class RoomsList extends Component { // Todo: Convert this to a functional component?
  render() {
    return (
      <div className="CardList">
        <h2>Generic CardList Component</h2>
        <p className="CardList--intro">
          {this.props.intro}
        </p>
        <ul> {/* Todo: This should be replaced with an array of Card elements */}
          {this.props.list.map((room) =>
            <li>{room}</li>
          )}
        </ul>
        <ListItem />
      </div>
    );
  }
}

export default RoomsList;
