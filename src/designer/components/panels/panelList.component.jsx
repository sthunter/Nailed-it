/* eslint-disable */
import React, {Component} from 'react';
import Radium from 'radium';
import _ from 'lodash';
import Portal from 'react-portal';

import Icon from '../icon.component';
import Panel from './panel.component';

import styles from './styles';
import PropertyGroup from './propertyGroup.component';
import Button from './button.component';
import SwitchState from './switchState.component';
import Columns from './columns.component';
import Column from './column.component';

class PanelList extends Component {
  render() {
    let {object, offset, objectComponent} = this.props;
    let style = {
      left: offset.width + offset.x,
      top: offset.y + window.scrollY,
    };
    return (
      <Portal closeOnEsc closeOnOutsideClick isOpened={true}>
        <div style={[styles.propertyPanel, style]}>
          {objectComponent.panels.map((Panel, i) => <Panel key={i} {...this.props} />)}
        </div>
      </Portal>
    );
  }
};

export default Radium(PanelList);
