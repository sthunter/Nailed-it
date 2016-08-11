import React, { Component } from 'react';
import { connect } from 'react-redux';
import FList from '../components/fList.component';
import { Row, Col, Button, Modal } from 'react-materialize';
import { bindActionCreators } from 'redux';
import { selectRoom, getRooms } from '../../rooms/actions/rooms.action';
import { changeRoute } from '../../routing/actions/routing.action';
import { browserHistory } from 'react-router';
import AddFurnitureForm from './addFurnitureForm.container';

import Dialog from 'material-ui/Dialog'; 
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';

class FurnitureList extends Component {
  componentDidMount() {
    if(Object.keys(this.props.rooms).length === 0) {
      this.props.getRooms();
    }
    if(this.props.params.name) {
      this.props.selectRoom(this.props.params.name)
    }
    this.props.changeRoute(this.props.location.pathname)  ;
  }

  state = {
    open:false
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };


  click(room) {
    this.props.selectRoom(room);
    browserHistory.push('/furniture/' + room)
  }

  render() {
    const intro = 'Furniture';
    const { rooms, roomSelected } = this.props;
    const roomNames =  Object.keys(rooms);
    var furniture = {};
     const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];


    if (roomSelected && rooms[roomSelected]) {
      Object.assign(furniture, rooms[roomSelected].furniture);
    }
  
    return (
      <div>
        <Row>
          <Col s={12}>
          
              <Tabs className="z-depth-1 grey lighten-3" inkBarStyle={{'background':'#424242'}} style={{'background':'#f5f5f5', 'overflowY':'scroll'}}>
                {roomNames.map((room, i) => {
                  return (
                    <Tab className='navTab' 
                    onClick={() => {this.click(room)}}
                    label={room}
                    key={i}
                    style={{'color':'#424242', 'background':'#f5f5f5'}}
                    >
                    </Tab>
                  )
                })}
              <Tab label='All' style={{'color':'#424242', 'background':'#f5f5f5', 'fontWeight':'bold'}}></Tab>
             </Tabs>  
            
          </Col>

          <div className='F-FAB'>
            <Button floating fab='vertical' icon='add' className='grey darken-3' large style={{'top': '24px', 'right': '24px'}}>
              <Button floating icon='weekend' className='grey' onTouchTap={this.handleOpen}/>  
                <div>
                  <Dialog
                    title="Add an Item"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                  >
                   <AddFurnitureForm/>
                  </Dialog>
                </div>

            </Button>
          </div>
        </Row>
        
        <Row>
          <Col s={12} l={12}>
            <div>
                <FList
                  list={ furniture }
                  intro={ intro }
                  view="furniture"
                />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps({ rooms, roomSelected }) {
  return { rooms, roomSelected };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectRoom, getRooms,  changeRoute}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FurnitureList);
  // <Button floating icon='sort' className='grey'/>
              // <Button floating icon='color_lens' className='grey'/>
              // <Button floating icon='add' className='grey'/>
               // <AddFurnitureForm/>
               // <Button floating icon='weekend' className='grey' onTouchTap={this.handleOpen}/>
