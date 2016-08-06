import React, {Component} from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ColorPalette extends Component {
  render() { 
    let rects;
    const rectWidth = 100;
    const colors = this.props.rooms[this.props.roomSelected].colors;
    if (colors && colors.length) {
      
      rects = colors.map((color, i) => (
        
        <rect key={i}  x={i*rectWidth} y="0" fill={color} width={rectWidth} height="50" />
      ));
      rects.push(<rect key={rects.length} stroke="black" width={rects.length * rectWidth} height="50" fill="transparent"/>)
    } else { // If there were no colors passed to props
      rects = <rect x="0" y="0" fill="white" width={rectWidth} height="50"></rect>
    }

    return (
      <div>
        <svg width={rectWidth * (rects.length - 1)}>
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
