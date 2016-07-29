import React, { Component } from 'react';
import './cardList.css';




class ListItem extends Component {
  render() {
    return (
      <div>
        <li className="list-item">

          <div className="item-description">
            <h1> {this.props.title} </h1>
            <p>description</p>
          </div>
          
          <div className="item-media-right">
            <img/>
          </div>

        </li>
      </div>
      );
  }
};

export default ListItem;