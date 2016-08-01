import React, { Component } from 'react';
import './App.css';
import Content from './Content';
import Header from './Header';
import Sidebar from './Sidebar';
import Foot from './Footer';
import FurnitureDetail from '../furniture/components/FurnitureDetail';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {open:true}
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this); 
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <Header handleToggle={this.handleToggle} handleClose={this.handleClose}/>
          </div>
          <p className="App-intro">
            <Sidebar handleClose={this.handleClose}/>
          </p>
          <Content store={this.props.store} />
          <Foot/>
        </div>
      </MuiThemeProvider>
    );
  }
}
