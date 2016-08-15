//Components
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectRoom, getRooms } from '../../rooms/actions/rooms.action';
import { changeRoute } from '../../routing/actions/routing.action';
import { browserHistory } from 'react-router';
import FList from '../components/fList.component';
import AddFurnitureForm from './addFurnitureForm.container';
import ListingFurniture from '../components/listingFurniture.component'
import Designer from '../../designer/drawingtool/App';
import ColorPalette from '../../colorPalette/containers/colorPalette.container';

//UI
import { Row, Col, Button, Modal } from 'react-materialize';
import Dialog from 'material-ui/Dialog'; 
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';

import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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
    add:false,
    view: 0
  }


  handleOpen = () => {
    this.setState({add: true});
  }

  handleClose = () => {
    this.setState({add: false});
  }

  click(room) {
    this.props.selectRoom(room);
    browserHistory.push('/furniture/' + room)
  }

  handleFList = () => {
    this.setState({view: 0});
  }

  handleDesigner = () => {
    this.setState({view: 1});
  } 

  handleAll = () => {
    this.setState({view: 2});
  }

  render() {
    const intro = 'Furniture';
    const { rooms, roomSelected } = this.props;
    const roomNames =  Object.keys(rooms);
    var furniture = {};
    const actions = [];
    var color;

    if (roomSelected && rooms[roomSelected]) {
      Object.assign(furniture, rooms[roomSelected].furniture);
      color = this.props.rooms[roomSelected].color.hex;
    }
    

    return (
      <div>
        <div className="nav-items" style={{"position":"fixed", "width":"100%", "marginTop":"-15%","marginBottom":"0", "zIndex": "500"}}>
          <Row style={{"position":"relative", "marginBottom":"0"}}>
            <Col s={12}>
                <Tabs className="z-depth-1 grey lighten-3" inkBarStyle={{'background':'#424242'}} style={{'background':'#f5f5f5'}}>
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
                <Tab label='All' onTouchTap={this.handleAll} style={{'color':'#424242', 'background':'#f5f5f5', 'fontWeight':'bold'}}></Tab>
              </Tabs>  
            </Col>
          </Row>
          
          <Row>
            <Col s={12}>
              <div className='right-align' style={{'background': color }}>
                <FlatButton label='My Items' onTouchTap={this.handleFList} />
                <FlatButton label='Designer' onTouchTap={this.handleDesigner} />
                <FlatButton label='All' onTouchTap={this.handleAll} />
              </div>
            </Col>
          </Row>
        </div>

        <div style={{"position":"relative", "margin-top":"15%"}}>
          <Row>
            <Col s={12} l={12}>
              <div>
                  {this.state.view === 0 ? <FList list={ furniture } intro={ intro } view="furniture" /> : null}
                  {this.state.view === 1 ? <Designer/> : null}
                  {this.state.view === 2 ? <ListingFurniture className="center-aligned" /> : null}
              </div>
            </Col>
          </Row>
          <div className='F-FAB'>
              <Button floating fab='vertical' icon='add' className='grey darken-3' large style={{'top': '24px', 'right': '24px'}}>
                <Button floating icon='weekend' className='grey' onTouchTap={this.handleOpen}/>
                  <div>
                    <Dialog
                      title="Add an Item"
                      actions={actions}
                      modal={false}
                      open={this.state.add}
                      onRequestClose={this.handleClose}
                    >
                     <AddFurnitureForm ref="furnitureForm"/>
                    </Dialog>
                  </div>
              </Button>
           </div>
        </div>
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


            //     <Button floating fab='vertical' onClick={this.handleOpen} icon='add' className='grey darken-3' large style={{'top': '24px', 'right': '24px'}}>
            //   <Button floating icon='weekend' className='grey' onTouchTap={this.handleOpen}/>  
            //     <div>
            //       <Dialog
            //         title="Add an Item"
            //         actions={actions}
            //         modal={false}
            //         open={this.state.add}
            //         onRequestClose={this.handleClose}
            //       >
            //        <AddFurnitureForm ref="furnitureForm"/>
            //       </Dialog>
            //     </div>
            //     <Button floating icon='gesture' className='grey' onTouchTap={this.handleOpenDesigner}/>
            // </Button>

