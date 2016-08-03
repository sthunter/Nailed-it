import React, { Component } from 'react';
import ListItem from './ListItem';
import AddItemButton from './AddItemButton';
import './cardList.css';

class CardList extends Component {
  render() {
    const listNames = Object.keys(this.props.list);
    return (
      <div className="CardList">
        {listNames.map((itemName) => {
          return (
            <ListItem
              key={ itemName }
              title={ itemName }
              clickHandler={this.props.clickHandler}
            />
          );
        })}
        <AddItemButton view={this.props.view === 'rooms' ? 'room' : 'furniture'} />
      </div>
    );
  }
}

export default CardList;
