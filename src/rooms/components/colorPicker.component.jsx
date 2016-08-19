import React, {Component} from 'react';
import { SwatchesPicker}  from 'react-color';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getColor } from '../actions/rooms.action'
import ReactTooltip from 'react-tooltip';

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
    const action = this.props.action || this.props.getColor;
    action(color, room);
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
      
      <span>
        <ReactTooltip />
        <i data-tip="Choose Your Color"  className="card-controls material-icons md-dark" style={{cursor: 'pointer'}} onClick={ this.handleClick }>format_paint</i>
          { this.state.displayColorPicker ?
            <div style={ popover }>
            <div style={ cover } onClick={ this.handleClose }/>
            <SwatchesPicker onChangeComplete={(color) => this.handleChangeComplete(color, this.props.title)} />
            </div>
            : null }
      </span>
    
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
