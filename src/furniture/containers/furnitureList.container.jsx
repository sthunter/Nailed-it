//Components
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectRoom, getRooms } from '../../rooms/actions/rooms.action';
import { changeRoute } from '../../routing/actions/routing.action';
import { getBudget } from '../../BudgetView/actions/budgetView.action';
import { browserHistory } from 'react-router';
import FList from '../components/fList.component';
import AddFurnitureForm from './addFurnitureForm.container';
import ListingFurniture from '../components/listingFurniture.component'
import Designer from '../../designer/drawingtool/App';
import AllFurniture from '../components/allFurniture.component';
import furnitureHelper from '../furnitureHelper';
import ListView from '../components/listView.component';

//UI
import { Row, Col, Button } from 'react-materialize';
import Dialog from 'material-ui/Dialog'; 
import FlatButton from 'material-ui/FlatButton';
import { Tabs, Tab } from 'material-ui/Tabs';
import ReactTooltip from 'react-tooltip';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

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

  componentWillReceiveProps(nextProps) {
    this.setState({add:false})
    let total = furnitureHelper.calculateTotalCost(nextProps.rooms)
    if (!nextProps.budget) {
      this.props.getBudget();
    }
    
    console.log("total")
    console.log(this.state.total)
    if (nextProps.budget && nextProps.budget < total && total !== this.state.total) {
      Materialize.toast('$' + (total - nextProps.budget) + '.00 over budget', 4000);
    }
    this.setState({total:total})
  }

  componentWillMount() {
    if (window.matchMedia("(min-width: 800px)").matches) {
      /* the viewport is at least 800 pixels wide */
      this.setState({mobile:false})
    } else {
      /* the viewport is less than 800 pixels wide */
      this.setState({mobile:true})
    }
    this.setState({value:this.props.roomSelected})
  }

  state = {
    add:false,
    view: 0,
    all: false,
    mobile: false,
    value: null
  }

  handleOpen = () => {
    this.setState({add: true});
  }

  handleClose = () => {
    this.setState({add: false});
  }

  click(room) {
    this.setState({view: 0});
    this.props.selectRoom(room);
    browserHistory.push('/furniture/' + room)
  }

  handleFList = () => {
    this.setState({view: 0});
  }

  handleDesigner = () => {
    this.setState({view: 2});
  } 

  handleAllList = () => {
    this.setState({view: 3});
    browserHistory.push('/furniture/all')
  }

  handleAllCard = () => {
    this.setState({view: 4});
    this.props.selectRoom('All');
    browserHistory.push('/furniture/all')
  }

  handleOverBudget = () => {
    Materialize.toast()
  }

  handleList = () => {
    this.setState({view: 1});
  }

  handleChange = (event, index, value) => this.setState({value});

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
      
        <div className="nav-items" style={{"position":"fixed", "width":"100%", "height":"84px", "marginTop":"-7%", "marginBottom":"0", "zIndex": "500"}}>
          {!this.state.mobile ? <Row style={{"position":"relative", "marginBottom":"0"}}>
            <Col s={12}>
                <Tabs value={this.props.roomSelected } className="z-depth-1 grey lighten-3" inkBarStyle={{'background':'#424242'}} style={{'background':'#f5f5f5'}}>
                  {roomNames.map((room, i) => {
                    return (
                      <Tab className='navTab'
                      onClick={() => {this.click(room)}}
                      label={room}
                      key={i}
                      value={room}
                      style={{'color':'#424242', 'background':'#f5f5f5'}}
                      >
                      </Tab>
                    )
                  })}
                <Tab label='All' value='All' onClick={()=>{this.handleAllCard()}} style={{'color':'#424242', 'background':'#f5f5f5', 'fontWeight':'bold'}}></Tab>
              </Tabs>  
            </Col>
          </Row>

          :

          <div className="center-align" style={{'background':'#f5f5f5'}}>
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
              {roomNames.map((room, i) => {
                return(
                  <MenuItem value={room} primaryText={room} onClick={() => {this.click(room)}} />
                  )
              })}
              <MenuItem value={'All'} primaryText='All' onClick={()=>{this.handleAllCard()}} />
            </DropDownMenu>
          </div>}
          
          <Row>
            <Col s={12}>
              
              {this.state.view < 3 ? <div className='left-align' style={{'background': color }}>
                <FlatButton label='Gallery' onTouchTap={this.handleFList} />
                <FlatButton label='List' onTouchTap={this.handleList} />
                <FlatButton label='Designer' onTouchTap={this.handleDesigner} />
              </div> : 

              <div className='left-align' style={{'background': 'rgba(255, 255, 255, 0.3)'}}>
                <FlatButton label='Gallery' onTouchTap={this.handleAllCard} />
                <FlatButton label='List' onTouchTap={this.handleAllList} />
              </div>}

            </Col>
          </Row>
        </div>

        <div style={{"position":"relative", "marginTop":"7%"}}>

          <Row>
            <Col s={12} l={12}>
              
                  {this.state.view === 0 ? <FList list={ furniture } intro={ intro } view="furniture" /> : null}
                  {this.state.view === 1 ? <ListView currentRoom={this.props.roomSelected} /> : null}
                  {this.state.view === 2 ? <Designer/> : null}
                  {this.state.view === 3 ? <ListingFurniture /> : null}
                  {this.state.view === 4 ? <AllFurniture /> : null}
              
            </Col>
          </Row>
          <ReactTooltip />
          {this.state.view < 3 ? <div onTouchTap={this.handleOpen} className='F-FAB' data-tip="Add Furniture">
              <Button floating fab='vertical' icon='add' className='grey darken-3' large style={{'top': '24px', 'right': '24px'}}>
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
           </div> : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ rooms, roomSelected, budget }) {
  return { rooms, roomSelected, budget };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectRoom, getRooms,  changeRoute, getBudget}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FurnitureList);