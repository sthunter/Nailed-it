import React, { Component } from 'react';
import { Navbar, NavItem} from 'react-materialize';

export default class Header extends Component {

  render() {
    return (
      <div>
       <Navbar brand='Nailed-It' right className="indigo darken-1">
        <NavItem onClick={function() {this.props.handleToggle}}>Settings</NavItem>
        <NavItem href='#'>Profile</NavItem>
       </Navbar>
     </div>
    );
  }
}
