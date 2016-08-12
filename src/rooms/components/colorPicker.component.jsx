import React, {Component} from 'react';
import { SwatchesPicker}  from 'react-color';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getColor } from '../actions/rooms.action'
import { CardPanel, Button, Row, Col, MediaBox } from 'react-materialize';

class ColorInput extends Component {

  state = {
     displayColorPicker: false,
     background: '#fff',
   };

   handleClick = () => {
     this.setState({ displayColorPicker: !this.state.displayColorPicker })
   };

   handleClose = () => {
     this.setState({ displayColorPicker: false })
   };

  handleChangeComplete(color, room) {
    this.props.getColor(color, room)
  };
  render() {
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

    return (
      <div>
      <div className='card-control' hoverable><i className="card-controls material-icons md-dark" onClick={ this.handleClick }>format_paint</i></div>
          { this.state.displayColorPicker ? 
            <div style={ popover }>
            <div style={ cover } onClick={ this.handleClose }/>
            <SwatchesPicker onChangeComplete={(color) => this.handleChangeComplete(color, this.props.roomSelected)} />
            </div> 
            : null }
      </div>
    
    );
  }
}

function mapStateToProps({ color, roomSelected }) {
  return { color, roomSelected }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getColor }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorInput);
