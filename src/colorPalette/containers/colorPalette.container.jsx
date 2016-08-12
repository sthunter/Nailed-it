import React, {Component} from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ColorPalette extends Component {
  buildPalette() {
    let roomSelected = this.props.roomSelected;
    const color = this.props.rooms[roomSelected].color && this.props.rooms[roomSelected].color.hex;
    let rectWidth = 100;
    return <rect x="0" y="0" fill={color || 'white'} width={rectWidth} height="50" />
  }

  render() { 
    let rects;
    let rectWidth = 100;
    rects = this.buildPalette();
    return (
      <div>
        <svg width={rectWidth * (rects.length - 1) || rectWidth}>
          <g>
          {rects}
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
