import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Header extends Component {

  render() {
    return (
      <div className="signin">
      </div>
    );
  }
}

function mapStateToProps(authenticated) {
  return {authenticated};
}

export default connect(mapStateToProps, {})(Header);

