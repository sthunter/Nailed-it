import React, {Component} from 'react';
import Radium from 'radium';
import SwatchesPicker from 'react-color';
import _ from 'lodash';
import Icon from '../../designer/src/Icon';
import styles from '../../designer/src/panels/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getColor } from '../actions/rooms.action'

class ColorInput extends Component {
  state = {
    show: false,
    x: 0,
    y: 0
  };
  newColor(color) {
    this.props.getColor(color);
  }

  toggleVisibility(event) {
    if (event.preventDefault) {
      event.preventDefault();
      let rect = event.target.getBoundingClientRect();
      this.setState({
        x: rect.left,
        y: rect.top
      });
    }

    let {show} = this.state;
    this.setState({
      show: !show
    })
  }

  handleChange(color) {
    let {r, g, b, a} = color.rgb;
    this.props.getColor(color);
  }

  render() {
    let {show, x, y} = this.state;
    let {value} = this.props;
    
    let position = {
      position: "fixed",
      left: x + 3,
      top: y - 2
    };

    return (
      <div>
        <SwatchesPicker
          color={value}
          display={show}
          positionCSS={position}
          onChange={this.handleChange.bind(this)}
          onClose={this.toggleVisibility.bind(this)}
          type="chrome" />
        <a href="#" 
         style={styles.colorInput}
         onClick={this.toggleVisibility.bind(this)}>
          <span style={[styles.color, {backgroundColor: value}]} />
         </a>
      </div>
    );
  }
}

function mapStateToProps({ color }) {
  return { color }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getColor }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Radium(ColorInput));