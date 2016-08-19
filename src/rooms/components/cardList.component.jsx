import React, { Component } from 'react';
import ListItem from './listItem.component.jsx';
import AddItemButton from '../../app/addItemButton.component.jsx';
import AddRoomForm from '../containers/addRoomForm.container';


class CardList extends Component {
  render() {
    const listNames = Object.keys(this.props.list);
    return (
      <div className="CardList">
        {listNames.map(itemName => (
            <ListItem
              key={ itemName }
              title={ itemName }
              clickHandler={ this.props.clickHandler }
              openDesigner={ this.props.openDesigner }
              rooms={ this.props.list }
            />
          )
        )}
        <div>
          <AddRoomForm/>
          <br/>
          <br/>
        </div>
      </div>
    );
  }
}

export default CardList;
