import React, { Component } from 'react';
import ListItem from './ListItem';
import AddItem from './AddItem';
import './cardList.css';

class CardList extends Component { // Todo: Convert this to a functional component?
  render() {
    return (
      <div className="CardList">
        <h2>Generic CardList Component</h2>
        <p className="CardList--intro">
          {this.props.intro}
        </p>
        {this.props.list.map((room) =>
          <ListItem key={ room.name } title= {room.name} />
        )}
        <AddItem />
      </div>
    );
  }
}

export default CardList;
