import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import tinycolor from 'tinycolor2';
import { SwatchesPicker } from 'react-color';

class ColorPalette extends Component {

  state = {
      displayColorPicker: false,
      color: this.props.rooms[this.props.roomSelected].color.hex
    };

    handleClick = () => {
      this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
      this.setState({ displayColorPicker: false })
    };

  findMonochromaticColors() {
    var color = this.state.color;
    var colors = tinycolor(color).monochromatic();
    var colorArray = colors.map(function(t) { return t.toHexString(); });
    return colorArray;
  }

  findComplementsColors() {
    var color = this.state.color;
    var colors = tinycolor(color).splitcomplement();
    var colorArray = colors.map(function(t) { return t.toHexString(); });
    return colorArray;
  }

  findTetradColors() {
    var color = this.state.color;
    var colors = tinycolor(color).tetrad();
    var colorArray = colors.map(function(t) { return t.toHexString(); });
    return colorArray;
  }

  findAnalogousColors() {
    var color = this.state.color;
    var colors = tinycolor(color).analogous();
    colors.map(function(t) { return t.toHexString(); });
    var colorArray = colors.map(function(t) { return t.toHexString(); });
    return colorArray;
  }

  complementsColors = this.findComplementsColors()
  analogousColors = this.findAnalogousColors()
  tetradColors = this.findTetradColors()
  monochromaticColors = this.findMonochromaticColors()

  buildPalette(colors) {
    let rectWidth = 100;
    var rects;
    rects = colors.map((color, i) => (
      <rect key={i} x={i*rectWidth} y="0" fill={color} width={rectWidth} height="50" />
    ));
    rects.push(<rect key={rects.length} stroke="black" width={rects.length * rectWidth} height="50" fill="transparent"/>)
    return rects;
  }

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
    let MonochromaticRects = this.buildPalette(this.monochromaticColors);
    let AnalagousRects = this.buildPalette(this.analogousColors);
    let TetraRects = this.buildPalette(this.tetradColors);
    let ComplementsRects = this.buildPalette(this.complementsColors);
    let rectWidth = 100;
    return (
      <div>
        <button onClick={ this.handleClick }>Pick Color</button>
        { this.state.displayColorPicker ? <div style={ popover }>
          <div style={ cover } onClick={ this.handleClose }/>
          <SwatchesPicker />
        </div> : null }
        <svg width={rectWidth * (MonochromaticRects.length - 1) || rectWidth}>
          <g>
          {MonochromaticRects}
          </g>
        </svg>
        <svg width={rectWidth * (AnalagousRects.length - 1) || rectWidth}>
          <g>
          {AnalagousRects}
          </g>
        </svg>
        <svg width={rectWidth * (TetraRects.length - 1) || rectWidth}>
          <g>
          {TetraRects}
          </g>
        </svg>
        <svg width={rectWidth * (ComplementsRects.length - 1) || rectWidth}>
          <g>
          {ComplementsRects}
          </g>
        </svg>
      </div>
    )
  }
};

function mapStateToProps({ rooms, roomSelected }) {
  return { rooms, roomSelected };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectRoom}, dispatch);
}


export default connect(mapStateToProps)(ColorPalette);
