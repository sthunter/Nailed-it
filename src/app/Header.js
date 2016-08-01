import React, { Component } from 'react';
import { Navbar, NavItem, Button, Col, Row} from 'react-materialize';

export default class Header extends Component {

  render() {
    return (
      <div>
       <Navbar brand='Nailed-It' left className="indigo darken-1">
        <NavItem href='#'>Settings</NavItem>
        <NavItem href='#'>Profile</NavItem>
       </Navbar>
     </div>
    );
  }
}
