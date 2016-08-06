import React, { Component } from 'react';
import { Navbar, NavItem, Input, Dropdown } from 'react-materialize';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makePublic_Private } from '../rooms/actions/rooms.action';
import { authenticate } from '../signup_signin/actions/signIn.action';
import { Link } from 'react-router';

class Header extends Component {

  changePublicStatus() {
    this.props.makePublic_Private(this.props.shared);
  }
  authButton() {
    if (!this.props.authenticated) {
      return "Sign In";
    }
  }

  signin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    const _this = this;
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      _this.props.authenticate(token);
    })
  }

  render() {
    return (
       <Navbar brand='Nailed-It' right className="grey darken-3">
        <NavItem><Input name='public' type='checkbox' value='Public' label='Public' onChange={() => {this.changePublicStatus()}}/></NavItem>
        <NavItem><Link to={ 'public' }>Sell Your Skills</Link></NavItem>
        <NavItem><Link to={ 'room' }>Go to my rooms</Link></NavItem>
        <NavItem  onClick={()=>this.signin()}>{this.authButton()}</NavItem>
       </Navbar>
    );
  }
}

function mapStateToProps({ shared, authenticated }) {
  return { shared, authenticated };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ makePublic_Private, authenticate }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
       
