import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/cardList.component.jsx';
import { getRooms, selectRoom,  makePublic_Private, addPhoto } from '../actions/rooms.action';
import { bindActionCreators } from 'redux';
import { Row, Col, Button, Input } from 'react-materialize';
import BudgetView from '../../BudgetView/containers/budgetView.container';
import { changeRoute } from '../../routing/actions/routing.action';
import Dropzone from 'react-dropzone';

export default class RoomsList extends Component {
  componentWillMount() {
    if(this.props.params.name) {
      this.props.selectRoom(this.props.params.name)
    }
    this.props.changeRoute(this.props.location.pathname);
    if(Object.keys(this.props.rooms).length === 0) {
      this.props.getRooms();
    }
  }

  onDrop(files) {
    this.props.addPhoto(files);
  }

  render() {
    const currentProject = this.props.projects.iGEKbLdXzHORTksYSB21JSd8cqA3;
    const currentPublicStatus = currentProject && this.props.projects.iGEKbLdXzHORTksYSB21JSd8cqA3.public;
    return (
      <div>
        <Row>
          <Col s={12} m={6} l={6}>
            <div style={{"overflowY":"scroll"}}>
              <div className="RoomListHeader">
                <Input name='public' type='checkbox' value='Public' checked={currentPublicStatus}
                       label='Share My Project'
                       onChange={() => this.props.makePublic_Private(!currentPublicStatus)}/>
              </div>
              <CardList
                clickHandler={this.props.selectRoom}
                addPhoto={this.onDrop}
                intro={this.props.roomSelected}
                list={this.props.rooms}
                view="rooms"
                openDesigner={this.props.changeRoute}
                style={{"mix-blend-mode":"color-dodge"}}
              />
            </div>
          </Col>
          <Col s={12} m={6} l={6} >
            <div>
              <BudgetView rooms={this.props.rooms}/>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps({ projects, rooms, roomSelected, route }) {
  return { projects, rooms, roomSelected, route };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getRooms, selectRoom, addPhoto, changeRoute, makePublic_Private }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsList);

