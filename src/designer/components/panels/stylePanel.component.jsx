/* eslint-disable */
import React, {Component} from 'react';
import Radium from 'radium';
import _ from 'lodash';

import Icon from '../icon.component';
import Panel from './panel.component';

import styles from './styles';
import PropertyGroup from './propertyGroup.component';
import Button from './button.component';
import SwitchState from './switchState.component';
import Columns from './columns.component';
import Column from './column.component';
import ColorInput from './colorInput.component';

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
