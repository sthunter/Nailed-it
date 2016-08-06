import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/cardList.component.jsx';
import { getRooms, selectRoom,  makePublic_Private, addPhoto } from '../actions/rooms.action';
import { bindActionCreators } from 'redux';
import { Row, Col, Button } from 'react-materialize';
import BudgetView from '../../BudgetView/containers/budgetView.container';
import Dropzone from 'react-dropzone';

export default class RoomsList extends Component {
  componentWillMount() {
    this.props.getRooms();
  }
  changePublicStatus() {
    this.props.makePublic_Private(this.props.shared);
  }
  onDrop(files) {
    // console.log('Received files: ', files);
    this.props.addPhoto(files)
  }

  render() {
    return (
      <div>
        <Row>
          <Col s={12} m={6} l={6}>
            <div style={{"overflowY":"scroll"}}>
              <span className="RoomListHeader"> Select your room </span>
              <CardList
                clickHandler={this.props.selectRoom}
                intro={this.props.roomSelected}
                list={this.props.rooms}
                view="rooms"
              />
            </div>
          </Col>

          <Col s={12} m={6} l={6}>
            <h3>Budget Chart / Graph </h3>  
            <BudgetView rooms={this.props.rooms}/>
          </Col>
        </Row>
        <Dropzone onDrop={files => this.onDrop(files)}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
      </div>
    );
  }
}

function mapStateToProps({ rooms, roomSelected, shared }) {
  return { rooms, roomSelected, shared };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getRooms, selectRoom, makePublic_Private, addPhoto }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsList);

// <Button onClick={ () => {this.changePublicStatus()} }>public: {"" + this.props.shared}</Button>
