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
              key={ item /* This assumes item is a string; we'll need to change this once item becomes an object */}
              title={ item }
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
