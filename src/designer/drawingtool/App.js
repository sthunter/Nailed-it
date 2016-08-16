import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {Text} from '../src/objects/Text';
import {Vector} from '../src/objects/Vector';
import {Rect} from '../src/objects/Rect';
import classes from './App.module.css'
import MondrianExample from './components/Mondrian';
import ColorPalette from '../../colorPalette/containers/colorPalette.container';


export default class Designer extends Component {
  render() {
    return (
      <div className={classes.container} >
        <div className={classes.example}>
          <div className={classes.info}>
          </div>
          <div className={classes.preview}>
            <ColorPalette />
            <MondrianExample params={this.props.params} />              
          </div>
        </div>
      </div>
    );
  }
}
