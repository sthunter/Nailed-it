import React, { Component } from 'react';
import { Navbar, NavItem, Input } from 'react-materialize';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makePublic_Private } from '../rooms/actions/rooms.action';
import { authenticate, logOut } from '../signup_signin/actions/signIn.action';
import { Link } from 'react-router';

class Header extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  };

  changePublicStatus() {
    const newPublicStatus = !this.props.public;
    this.props.makePublic_Private(newPublicStatus);
  }

  signInSignOut() {
    if(this.props.authenticated) {
      this.props.logOut();
    } else {
      this.signin()
    }
  }

  authButton() {
    if (!this.props.authenticated && this.props.route !== 'room') {
      return 'Sign In';
    }
    else if (this.props.route !== 'room') {
      //return 'My Rooms'
      return 'Sign Out';
    }
  }

  makePublic() {
    if(this.props.route === 'room' || this.props.route === '/room') {
      return <Input name='public' type='checkbox' value='Public' label='Public' onChange={() => {this.changePublicStatus()}}/>
    }
  }

  signin() {
    var provider = new firebase.auth.GoogleAuthProvider(); // eslint-disable-line no-undef
    const _this = this;
    firebase.auth().signInWithPopup(provider).then(function(result) { // eslint-disable-line no-undef
      var token = result.credential.accessToken;
      //var user = result.user;
      _this.props.authenticate(token);
      _this.context.router.push('room');
    })
  }

  activeIfRoom(roomName) {
    return (roomName === this.props.route || '/' + roomName === this.props.route) ?
      ' active'
      : '';
  }

  render() {
    return (
      <Navbar className="grey darken-3">
        <NavItem><Link to="/room"><span id="brand">Nailed-It</span></Link></NavItem>
        <NavItem className="left" onClick={()=>this.signInSignOut()}>{this.props.authenticated ? 'Sign Out' : 'Sign In'}</NavItem>
        <NavItem className={ 'right nav-item' + this.activeIfRoom('public') }><Link to={ '/public' }>List of public projects</Link></NavItem>
        <NavItem className={ 'right nav-item' + this.activeIfRoom('room') }><Link to={ '/room' }>My Rooms</Link></NavItem>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    'public': state.public, // apparently public is a reserved word, so I'm structuring this function this way
    authenticated: state.authenticated,
    route: state.route
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ makePublic_Private, authenticate, logOut }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
