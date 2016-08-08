import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

class Header extends Component {
  
  render() {
    return (
      <div>
      Pleae Login to proceed to your Rooms;
      </div>
    );
  }
}

function mapStateToProps(authenticated) {
  return {authenticated};
}

export default connect(mapStateToProps, {})(Header);

