/* eslint-disable */
import React, {Component} from 'react';
import Radium from 'radium';
import _ from 'lodash';

import styles from './styles';
import Icon from '../icon.component';
import Panel from './panel.component';
import PropertyGroup from './propertyGroup.component';
import Button from './button.component';
import SwitchState from './switchState.component';
import Columns from './columns.component';
import Column from './column.component';

export default class ArrangePanel extends Panel {
  render() {
    let {object} = this.props;
    return (
      <PropertyGroup>
          <Columns label="Arrange">
            <Column>
              <Button onClick={this.props.onArrange.bind(this, 'back')}>
                <Icon icon="send-to-back" />
                <span>send to back</span>
              </Button>
              <Button onClick={this.props.onArrange.bind(this, 'front')}>
                <Icon icon="bring-to-front" />
                <span>bring to front</span>
              </Button>
            </Column>
          </Columns>
        </PropertyGroup>
    );
  }
}
