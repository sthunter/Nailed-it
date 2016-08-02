import React, { Component } from 'react';
import { connect} from 'react-redux';
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
          intro={ intro }
        />
      </div>
    );
  }
}



