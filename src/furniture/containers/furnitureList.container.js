import React, { Component } from 'react';
import CardList from '../../cardlist/components/CardList';


export default class FurnitureList extends Component {
  componentWillMount() {
    const _this = this;
  }

  render() {
    const intro = 'Furniture'
    const furniture = this.props.furniture || ['chair', 'swing']
    return (
      <div>
        <h3>Current Rooms Furniture</h3>
        <CardList
          list={ furniture }
          store={this.props.store}
          intro={ intro }
        />
      </div>
    );
  }
}



