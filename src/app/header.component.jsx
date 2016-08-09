import React, { Component } from 'react';
import { Navbar, NavItem, Input, Dropdown } from 'react-materialize';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makePublic_Private } from '../rooms/actions/rooms.action';
import { authenticate } from '../signup_signin/actions/signIn.action';
import { Link } from 'react-router';

class Header extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  changePublicStatus() {
    this.props.makePublic_Private(this.props.shared);
  }

  checkforSignin() {
    if(!this.props.authenticated) {
      this.signin()
    }
    else {
      this.context.router.push('room');
    }
  }

  publicRoute() {
    if(this.props.route !== "public")
    return "Show me public projects"
  }
  authButton() {
    if (!this.props.authenticated && this.props.route !== "room") {
      return "Sign In";
    }
    else if (this.props.route !== "room") {
      return "Roomslist"
    }
  }
  
  makePublic() {
    if(this.props.route === "room") {
      return <Input name='public' type='checkbox' value='Public' label='Public' onChange={() => {this.changePublicStatus()}}/>
    }
  }
  signin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    const _this = this;
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      _this.props.authenticate(token);
      _this.context.router.push('room');
    })
  }

  render() {
    return (
       <Navbar brand='Nailed-It' right className="grey darken-3">
        <NavItem>{this.makePublic()}</NavItem>
        <NavItem><Link to={ 'public' }>{this.publicRoute()}</Link></NavItem>
        <NavItem  onClick={()=>this.checkforSignin()}>{this.authButton()}</NavItem>
       </Navbar>
    );
  }
}

function mapStateToProps({ shared, authenticated, route }) {
  return { shared, authenticated, route };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ makePublic_Private, authenticate }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
       
