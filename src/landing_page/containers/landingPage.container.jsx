import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import SwatchesPicker from 'react-color';

class Header extends Component {
  state = {
    background: '#fff',
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };
  render() {
    return (
      <div className="signin">
      <SwatchesPicker type="sketch"
             color={ this.state.background }
             onChangeComplete={ this.handleChangeComplete }
           />
      </div>
    );
  }
}

function mapStateToProps(authenticated) {
  return {authenticated};
}

export default connect(mapStateToProps, {})(Header);

