/* eslint-disable */
import React, {Component} from 'react';
import {modes} from '../constants';
import Icon from '../icon.component';
import _ from 'lodash';

import SizePanel from '../panels/sizePanel.component';
import TextPanel from '../panels/textPanel.component';
import StylePanel from '../panels/stylePanel.component';
import ArrangePanel from '../panels/arrangePanel.component';



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
