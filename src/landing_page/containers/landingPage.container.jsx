import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

  render() {
    return (
      <div className="signin">
      </div>
    );
  }
}

function mapStateToProps({ authenticated }) {
  return { authenticated };
}

export default connect(mapStateToProps, {})(Header);

