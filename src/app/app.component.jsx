import React, { Component } from 'react';
import './app.css';
import Header from './header.component';
import Content from "./content.component";

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header navbar-fixed">
          <Header />
        </div>
        <Content children={this.props.children}/>
      </div>
    );
  }
}
