import React, { Component } from 'react';
import ListItem from './listItem.component';


class CardList extends Component {
  render() {
    const listNames = Object.keys(this.props.lists);
    return (
      <div className="CardList">
        {listNames.map((itemName) => {
          return (
            <ListItem
              key={ itemName }
              title={ itemName }
              lists = { this.props.lists[itemName] }
              clickHandler={this.props.clickHandler}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
