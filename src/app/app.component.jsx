import React, { Component } from 'react';
import './app.css';
import Header from './header.component';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Content from "./content.component";

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header navbar-fixed">
            <Header />
          </div>
          <Content children={this.props.children}/>
        </div>
      </MuiThemeProvider>
    );
  }
}
