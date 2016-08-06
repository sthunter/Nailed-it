import React, { Component } from 'react';
import ListItem from './listItem.component.jsx';
import AddItemButton from '../../app/addItemButton.component.jsx';

class CardList extends Component {

toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }


  render() {
    const listNames = Object.keys(this.props.list);
    const toTitleCase = this.toTitleCase;

    return (
      <div className="CardList">
        {listNames.map(itemName => (
            <ListItem
              key={ itemName }
              title={ toTitleCase(itemName) }
              clickHandler={this.props.clickHandler}
            />
          )
        )}
        <AddItemButton view={this.props.view === 'rooms' ? 'room' : 'furniture'} />
      </div>
    );
  }
}

export default CardList;
