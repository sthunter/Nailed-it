import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
// import RaisedButton from 'material-ui/RaisedButton';
// import injectTapEventPlugin from 'react-tap-event-plugin';

export default class Sidebar extends Component {

  render() {
    return (
      <div>
         <Drawer
          docked={false}
          width={200}
          open={this.props.state}
          >
          <MenuItem onTouchTap={this.props.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.props.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}