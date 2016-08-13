import React, {Component} from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ColorPalette extends Component {
  buildPalette() {
    const roomSelectedName = this.props.roomSelected;
    const room = this.props.rooms[roomSelectedName];
    const color = room && room.color && room.color.hex;
    let rectWidth = 100;
    return <rect x="0" y="0" fill={color || 'white'} width={rectWidth} height="50" />
  }

  render() { 
    return (
      <div>
        <svg width={100}>
          <g>
          {this.buildPalette()}
          </g>
        </svg>
      </div>
    )
  }
};

function mapStateToProps({ rooms, roomSelected }) {
  return { rooms, roomSelected };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({selectRoom}, dispatch);
// }


export default connect(mapStateToProps)(ColorPalette);
