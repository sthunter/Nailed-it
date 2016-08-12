import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {Text} from '../src/objects/Text';
import {Vector} from '../src/objects/Vector';
import {Rect} from '../src/objects/Rect';
import classes from './App.module.css'
import MondrianExample from './components/Mondrian';

export default class Designer extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.example}>
          <div className={classes.info}>
            <h3>Visualize your</h3>
          </div>
          <div className={classes.preview}>
            <MondrianExample params={this.props.params}/>
          </div>
        </div>
      </div>
    );
  }
}
