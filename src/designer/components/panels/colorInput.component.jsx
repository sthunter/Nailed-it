/* eslint-disable */
import React, {Component} from 'react';
import Radium from 'radium';
import ChromePicker from 'react-color';
import _ from 'lodash';
import Icon from '../icon.component';

import styles from './styles';

class ColorInput extends Component {
  state = {
    displayColorPicker: false,
    x: 0,
    y: 0
  };
  handleClick = () => {
      console.log("got in here")
      this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
      console.log("trying to close")
      this.setState({ displayColorPicker: false })
  };

  handleChange(color) {
    let {r, g, b, a} = color.rgb;
    this.props.onChange(`rgba(${r}, ${g}, ${b}, ${a})`);
  }

  render() {
    let {x, y} = this.state;
    let {value} = this.props;
    
    let position = {
      position: "fixed",
      left: x + 3,
      top: y - 2
    };
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
      { this.state.displayColorPicker ? <div style={ popover }>
                <div style={ cover } onClick={ this.handleClose }/>
                <ChromePicker color={value} positionCSS={position}
          onChange={this.handleChange.bind(this)} />
              </div> : null }
        <a href="#" 
         style={styles.colorInput}
         onClick={ this.handleClick }>
          <span style={[styles.color, {backgroundColor: value}]} />
         </a>
      </div>
    );
  }
}

export default Radium(ColorInput);
