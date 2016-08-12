import React, { Component } from 'react';
import { connect } from 'react-redux';
import FList from '../components/fList.component';
import { Row, Col, Button, Modal } from 'react-materialize';
import { bindActionCreators } from 'redux';
import { selectRoom, getRooms } from '../../rooms/actions/rooms.action';
import { changeRoute } from '../../routing/actions/routing.action';
import { browserHistory } from 'react-router';
import AddFurnitureForm from './addFurnitureForm.container';
import ListingFurniture from '../components/listingFurniture.component'
import Dialog from 'material-ui/Dialog'; 
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import Designer from '../../designer/drawingtool/App';


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
    selectedIndex: 0
  }

  handleOpen = () => {
    this.setState({add: true});
  }

  handleClose = () => {
    this.setState({submit: true})
    this.setState({add: false});
  }

  click(room) {
    this.props.selectRoom(room);
    browserHistory.push('/furniture/' + room)
  }

  // handleOpenDesigner = () => {
  //   this.setState({view: 1});
  // } 

  // handleItemView = () => {
  //   this.setState({view: 0});
  // }

  // handleItemView = () => {
  // this.setState({view: 2});
  // }

  select = (index) => this.setState({selectedIndex: index});

  render() {
    const intro = 'Furniture';
    const { rooms, roomSelected } = this.props;
    const roomNames =  Object.keys(rooms);
    var furniture = {};
    const actions = [];

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
            <Button floating fab='vertical' onClick={this.handleOpen} icon='add' className='grey darken-3' large style={{'top': '24px', 'right': '24px'}}>
              <Button floating icon='weekend' tooltip="Add an Item" className='grey' onTouchTap={this.handleOpen}/>  
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
                <Button floating icon='gesture' className='grey' onTouchTap={this.handleOpenDesigner}/>
            </Button>
          </div>
        </Row>
        
        <Row>
          <Col s={12} l={12}>
          <Button onTouchTap={this.select(0)}>Flist</Button>
          <Button onTouchTap={this.select(1)}>Design</Button>
          <Button onTouchTap={this.select(2)}>List</Button>
            <div>
              
           
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

               

      //         <div>
      //   <Paper zDepth={1}>
      //     <BottomNavigation style={{'backgroundColor': 'rgb(255, 255, 255)'}} selectedIndex={this.state.selectedIndex}>
      //       <BottomNavigationItem
      //         label=""
      //         icon={recentsIcon}
      //         onTouchTap={() => this.select(0)}
      //       />
      //       <BottomNavigationItem
      //         label="Favorites"
      //         icon={favoritesIcon}
      //         onTouchTap={() => this.select(1)}
      //       />
      //       <BottomNavigationItem
      //         label="Nearby"
      //         icon={nearbyIcon}
      //         onTouchTap={() => this.select(2)}
      //       />
      //     </BottomNavigation>
      //   </Paper>
      // </div>

