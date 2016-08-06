import React, {Component} from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ColorPalette extends Component {
  buildPalette() {
    let roomSelected = this.props.roomSelected
    console.log(this.props.rooms[roomSelected].colors)
    let colors = ['#45425A', '#575C55', '#6C7D47', '#96A13A', '#ACC12F'];
    let rectWidth = 100;
    let rects;
    if (colors && colors.length) {
      
      rects = colors.map((color, i) => (
        
        <rect key={i}  x={i*rectWidth} y="0" fill={color} width={rectWidth} height="50" />
      ));
      rects.push(<rect key={rects.length} stroke="black" width={rects.length * rectWidth} height="50" fill="transparent"/>)
    } else { // If there were no colors passed to props
      rects = <rect x="0" y="0" fill="white" width={rectWidth} height="50"></rect>
    }
    return rects
  }

  render() { 
    let rects;
    let rectWidth = 100;
    rects = this.buildPalette();
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
