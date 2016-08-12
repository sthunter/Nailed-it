/* eslint-disable */
import React, {Component} from 'react';
import {modes} from '../constants';
import Icon from '../Icon';
import _ from 'lodash';

import SizePanel from '../panels/SizePanel';
import TextPanel from '../panels/TextPanel';
import StylePanel from '../panels/StylePanel';
import ArrangePanel from '../panels/ArrangePanel';



export default class Vector extends Component {
  static panels = [
    SizePanel,
    TextPanel,
    StylePanel,
    ArrangePanel
  ];

  getStyle() {
    let {object} = this.props;
    return {
      mixBlendMode: object.blendMode
    }
  }

  getTransformMatrix({rotate, x, y, width, height}) {
    if (rotate) {
      let centerX = width / 2 + x;
      let centerY = height / 2 + y;
      return `rotate(${rotate} ${centerX} ${centerY})`;
    }
  }

  getObjectAttributes() {
    let {object, onRender, ...rest} = this.props;
    return {
      ...object,
      transform: this.getTransformMatrix(object),
      ref: onRender, 
      ...rest
    };
  }
}
