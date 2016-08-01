import React, { Component } from 'react';
import ListItem from './ListItem';
import AddItem from './AddItem';
import './cardList.css';

class CardList extends Component {
  render() {
    return (
      <div className="CardList">
        {this.props.list.map((item) => {
          return (
            <ListItem
              key={ item.roomName }
              title={ item.roomName }
              clickHandler={this.props.clickHandler}
            />
          );
        })}
        <AddItem store={this.props.store}/>
      </div>
    );
  }
}

export default CardList;
