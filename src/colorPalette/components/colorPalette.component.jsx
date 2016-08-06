import React, {Component} from 'react';

const ColorPalette = (props) => {
  let rects;
  if (props.colors && props.colors.length) {
    rects = props.colors.map((color, i) => (
      <rect x={i*51} y="0" fill={color} width="50" height="100" />
    ))
  } else { // If there were no colors passed to props
    console.log('white');
    rects = <rect x="0" y="0" fill="white" width="50" height="100"></rect>
  }

  return (
    <div>
      <svg>
        {rects}
      </svg>
    </div>
  )
};

export default ColorPalette;

//class ColorPalette extends Component {
//  render() {
//    let rects;
//    if (this.props.colors && this.props.colors.length) {
//      rects = this.props.colors.map((color, i) => (
//        <rect x={i*51} y="0" fill={color} width="50" height="100" />
//      ))
//    } else { // If there were no colors passed to props
//      console.log('white');
//      rects = <rect x="0" y="0" fill="white" width="50" height="100"></rect>
//    }
//
//    return (
//      <div>
//        <svg>
//          {rects}
//        </svg>
//      </div>
//    );
//  }
//};
