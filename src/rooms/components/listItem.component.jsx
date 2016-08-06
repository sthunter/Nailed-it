import React, { Component } from 'react';
import { CardPanel, Button, Row, Col } from 'react-materialize';
import { Link } from 'react-router';
import { removeRoom } from '../actions/rooms.action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ListItem extends Component {
  handleClick(title) {
    if (this.props.clickHandler) {
      this.props.clickHandler(title);
    }
  }
  removeRoomCall(title) {
    removeRoom(title);
  }

  render() {

    const title = this.props.title;
    return (
      <Link to={ 'furniture' }>
        <CardPanel
          onClick={ () => this.handleClick(title) }
          className='grey lighten-2 ListItem card-panel hoverable'
          textClassName='black-text'
        >
          <div className='card-title'>
            <span>{title}</span>
          </div>
          <div className='card-controls'>
            <i className="material-icons md-dark">add_a_photo</i>
            <i className="material-icons md-dark">create</i>
            <i className="material-icons md-dark" onClick={() => {this.removeRoomCall(title)} }>delete_sweep</i>
          </div>
        </CardPanel>
      </Link>
      );
  }
}

// export default ListItem;
// function mapStateToProps() {
//   return {  };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeRoom }, dispatch);
}

export default connect(null, mapDispatchToProps)(ListItem);
