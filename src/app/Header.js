import React, { Component } from 'react';
import { Navbar, NavItem, Button, Col, Row} from 'react-materialize';

export default class Header extends Component {

  render() {
    return (
      <div>
       <Navbar brand='Nailed-It' right className="blue darken-3">
        <NavItem href='#'>Settings</NavItem>
        <NavItem href='#'>Profile</NavItem>
       </Navbar>
     </div>
    );
  }
}
