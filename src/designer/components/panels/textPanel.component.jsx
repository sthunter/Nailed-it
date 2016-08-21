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

export default class TextPanel extends Panel {
  fontFamilies = [
    ['Helvetica', 'Helvetica, Arial, sans-serif'],
    ['Helvetica Neue', '"Helvetica Neue", Arial, sans-serif'],
    ['Georgia', 'Georgia, serif'],
    ['American Typewriter', 'AmericanTypewriter, Georgia, serif'],
    ['Monaco', 'Monaco, consolas, monospace'],
  ];

  render() {
    let {object} = this.props;
    return (
      <PropertyGroup showIf={_.has(object, 'text')}>
          <div style={styles.columns}>
            <div style={[styles.row, {paddingTop: 25, paddingRight: 10}]}>
              <input style={[styles.input, styles.textInput]} 
                     onChange={(e) => this.props.onChange('text', e.target.value)}
                     value={object.text} />
            </div>
          </div>
        </PropertyGroup>
    );
  }
}
