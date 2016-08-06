import React, { Component } from 'react';
import { Navbar, NavItem, Input, Dropdown } from 'react-materialize';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makePublic_Private } from '../rooms/actions/rooms.action';
import { Link } from 'react-router';

class Header extends Component {

  changePublicStatus() {
    this.props.makePublic_Private(this.props.shared);
  }

  render() {
    return (
      <div>
       <Navbar brand='Nailed-It' right className="grey darken-3">
        <NavItem><Input name='public' type='checkbox' value='Public' label='Public' onChange={() => {this.changePublicStatus()}}/></NavItem>
          
        <NavItem><Link to={ 'public' }>Sell Your Skills</Link></NavItem>
       </Navbar>
     </div>
    );
  }
}

function mapStateToProps({ shared }) {
  return { shared };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ makePublic_Private }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
       