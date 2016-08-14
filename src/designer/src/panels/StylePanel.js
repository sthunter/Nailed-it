/* eslint-disable */
import React, {Component} from 'react';
import Radium from 'radium';
import _ from 'lodash';

import Icon from '../Icon';
import Panel from './Panel';

import styles from './styles';
import PropertyGroup from './PropertyGroup';
import Button from './Button';
import SwitchState from './SwitchState';
import Columns from './Columns';
import Column from './Column';
import ColorInput from './ColorInput';

export default class StylePanel extends Panel {
  modes = [
    'normal',
    'multiply',
    'screen',
    'overlay',
    'darken',
    'lighten',
    'color-dodge',
    'color-burn',
    'hard-light',
    'soft-light',
    'difference',
    'exclusion',
    'hue',
    'saturation',
    'color',
    'luminosity'
  ];

  render() {
    let {object} = this.props;
    return (
      <PropertyGroup>
          <Columns label="Fill">
            <Column>
              <ColorInput value={object.fill}
                          onChange={this.props.onChange.bind(this, 'fill')} />
            </Column>
          </Columns>
        </PropertyGroup>
    );
  }
}
