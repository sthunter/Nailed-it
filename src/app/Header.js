import React, { Component } from 'react';
// import  from '../rooms/containers/roomsList.container';
import { Navbar, NavItem, Button, Col, Row} from 'react-materialize';


export default class Header extends Component {
  render() {
    return (
      <div>
       <Navbar brand='Nailed-It' right className="indigo darken-1">
        <NavItem href='#'>Settings</NavItem>
        <NavItem href='#'>Profile</NavItem>
       </Navbar>
     </div>
    );
  }
}
