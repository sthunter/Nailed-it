import React, { Component } from 'react';
import { connect } from 'react-redux';
import FList from '../components/fList.component';
import { Row, Col, Button } from 'react-materialize';
import { bindActionCreators } from 'redux';
import { selectRoom, getRooms } from '../../rooms/actions/rooms.action';
import { changeRoute } from '../../routing/actions/routing.action';
import { browserHistory } from 'react-router';

import {Tabs, Tab} from 'material-ui/Tabs';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

class FurnitureList extends Component {
  componentDidMount() {
    if(Object.keys(this.props.rooms).length === 0) {
      this.props.getRooms();
    }
    if(this.props.params.name) {
      this.props.selectRoom(this.props.params.name)
    }
    this.props.changeRoute(this.props.location.pathname);
  }

  click(room) {
    this.props.selectRoom(room);
    browserHistory.push('/furniture/' + room)
  }

  render() {
    const intro = 'Furniture';
    const { rooms, roomSelected } = this.props;
    const roomNames =  Object.keys(rooms);
    var furniture = {};

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
            <Button floating fab='vertical' icon='arrow_drop_up' className='grey darken-3' small style={{'top': '24px', 'right': '24px'}}>
              <Button floating icon='filter_list' className='grey'/>
              <Button floating icon='sort' className='grey'/>
              <Button floating icon='color_lens' className='grey'/>
              <Button floating icon='add' className='grey'/>
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

