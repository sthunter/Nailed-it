import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import tinycolor from 'tinycolor2';
import { SwatchesPicker } from 'react-color';
import {Col, Row} from 'react-materialize';

class ColorPalette extends Component {

  state = {
      displayColorPicker: false,
    };

    handleClick = () => {
      this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
      this.setState({ displayColorPicker: false })
    };

  findMonochromaticColors(color) {

    var colors = tinycolor(color).monochromatic();
    var colorArray = colors.map(function(t) { return t.toHexString(); });
    return colorArray;
  }

  findComplementsColors(color) {

    var colors = tinycolor(color).splitcomplement();
    var colorArray = colors.map(function(t) { return t.toHexString(); });
    return colorArray;
  }

  findTetradColors(color) {

    var colors = tinycolor(color).tetrad();
    var colorArray = colors.map(function(t) { return t.toHexString(); });
    return colorArray;
  }

  findAnalogousColors(color) {

    var colors = tinycolor(color).analogous();
    colors.map(function(t) { return t.toHexString(); });
    var colorArray = colors.map(function(t) { return t.toHexString(); });
    return colorArray;
  }

  buildPalette(colors) {
    let rectWidth = 100;
    var rects;
    rects = colors.map((color, i) => (
      <rect key={i} x={i * rectWidth} y="0" fill={color} width={rectWidth} height="50" />
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
    var complementsColors = this.findComplementsColors(this.props.rooms[this.props.roomSelected].color.hex)
    var analogousColors = this.findAnalogousColors(this.props.rooms[this.props.roomSelected].color.hex)
    var tetradColors = this.findTetradColors(this.props.rooms[this.props.roomSelected].color.hex)
    var monochromaticColors = this.findMonochromaticColors(this.props.rooms[this.props.roomSelected].color.hex)
    let MonochromaticRects = this.buildPalette(monochromaticColors);
    let AnalagousRects = this.buildPalette(analogousColors);
    let TetraRects = this.buildPalette(tetradColors);
    let ComplementsRects = this.buildPalette(complementsColors);
    let rectWidth = 100;
    return (
      <div>
        <button onClick={ this.handleClick }>Pick Color</button>
        { this.state.displayColorPicker ? <div style={ popover }>
          <div style={ cover } onClick={ this.handleClose }/>
          <SwatchesPicker />
        </div> : null }

        <Row>
        <Col s={6}>
          <div>Shades</div>
          <svg width={rectWidth * (MonochromaticRects.length - 1) || rectWidth} height={50}>
            <g>
            {MonochromaticRects}
            </g>
          </svg>
        </Col>
        <Col s={6}>
        <div>Analagous Colors</div>
          <svg width={rectWidth * (AnalagousRects.length - 1) || rectWidth} height={50}>
            <g>
            {AnalagousRects}
            </g>
          </svg>
        </Col>
        </Row>
        <Row>
        <Col s={6}>
          <div>Tetradic Colors</div>
          <svg width={rectWidth * (TetraRects.length - 1) || rectWidth} height={50}>
            <g>
            {TetraRects}
            </g>
          </svg>
          </Col>
          <Col s={6}>
            <div>Complimentary Colors</div>
            <svg width={rectWidth * (ComplementsRects.length - 1) || rectWidth} height={50}>
              <g>
              {ComplementsRects}
              </g>
            </svg>
          </Col>
        </Row>
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
