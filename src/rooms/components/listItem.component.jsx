import React, { Component } from 'react';
import { CardPanel, Button, Row, Col } from 'react-materialize';
import { Link } from 'react-router';
import { removeRoom } from '../actions/rooms.action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SwatchPicker } from 'react-color'

class ListItem extends Component {
  handleClick(title) {
    if (this.props.clickHandler) {
      this.props.clickHandler(title);
    }
  }
  removeRoomCall(title) {
    removeRoom(title);
    Materialize.toast(title + ' removed', 4000)
  }

  state = {
    displayColorPicker: false,
  };

  handleColorClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleColorClick () {
    console.log('got here')
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };


  render() {
<<<<<<< 7e850edf41728f60e8790f56c49dbe2f1b6d8dc3
||||||| merged common ancestors

=======


    const popover = {
      position: 'absolute',
      zIndex: '2',
    }
    const cover = {
      position: 'fixed',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
    }
>>>>>>> style(wip): color swatches on roomslist
    const title = this.props.title;
    
    return (
<<<<<<< 7e850edf41728f60e8790f56c49dbe2f1b6d8dc3
      <Link to={ 'furniture/' + this.props.title }>
||||||| merged common ancestors
      <Link to={ 'furniture' }>
=======
>>>>>>> style(wip): color swatches on roomslist
        <CardPanel
          onClick={ () => this.handleClick(title) }
          className='grey lighten-2 ListItem card-panel hoverable'
        >
          <div>
            <span><Link className="card-title" to={ 'furniture' }>{title}</Link></span>
          </div>
          <div className=''>
            <i className="card-controls material-icons md-dark">add_a_photo</i>
            <i className="card-controls material-icons md-dark">create</i>
            <i className="card-controls material-icons md-dark" onClick={() => {this.removeRoomCall(title)}}>delete_sweep</i>
            <i className="card-controls material-icons md-dark" onClick={() => {this.handleColorClick}}>format_paint</i>
            { this.state.displayColorPicker ? <div style={ popover }>
              <div style={ cover } onClick={ this.handleColorClose }/>
              <SwatchPicker />
              </div> : null 
            }
          </div>
        </CardPanel>
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
