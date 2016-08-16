/* eslint-disable */
import React, {Component} from 'react';
import {modes} from '../constants';
import Icon from '../Icon';
import _ from 'lodash';
import Text  from './Text';

import Vector from './Vector';

export default class Rect extends Vector {
  static meta = {
    icon: <Icon icon={'rectangle'} size={30} />,
    initial: {
      width: 5,
      height: 5,
      strokeWidth: 0,
      fill: "blue",
      radius: 0,
      blendMode: "normal",
      rotate: 0,
      text: "Hello",
      rotate: 0,
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none",
      fill: "black",
      fontSize: 50,
      fontFamily: "Helvetica"
    }
  }

  getStyle() {
    let {object} = this.props;
    return {
      ...super.getStyle(),
      dominantBaseline: "central",
      fontWeight: object.fontWeight,
      fontStyle: object.fontStyle,
      textDecoration: object.textDecoration,
      mixBlendMode: object.blendMode,
      WebkitUserSelect: "none"
    };
  }

  render() {
    let {object, index} = this.props;
    return (
      <rect style={this.getStyle()}
         {...this.getObjectAttributes()}
         rx={object.radius}
         width={object.width}
         height={object.height}
        >
        </rect>
    );
  }
}
