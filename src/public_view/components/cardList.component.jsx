import React, { Component } from 'react';
import ListItem from './listItem.component';
import Dropzone from 'react-dropzone';


class CardList extends Component {
  onDrop(files) {
    console.log('Received files: ', files);
  }

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
        <Dropzone onDrop={this.onDrop}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
      </div>
    );
  }
}

export default CardList;
