import React, { Component } from 'react';
import './App.css';
import Content from './Content';
import Header from './Header';
import Foot from './Footer';
import FurnitureDetail from '../furniture/components/FurnitureDetail';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <Header handleToggle={this.handleToggle} handleClose={this.handleClose}/>
          </div>
          <p className="App-intro">
          </p>
          <Content store={this.props.store} />
          <Foot/>
        </div>
      </MuiThemeProvider>
    );
  }
}
