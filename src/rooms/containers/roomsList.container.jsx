import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/cardList.component.jsx';
import { getRooms, selectRoom,  makePublic_Private} from '../actions/rooms.action';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'react-materialize';
import BudgetView from '../../BudgetView/containers/budgetView.container';

export default class RoomsList extends Component {
  componentWillMount() {
    const _this = this;
    this.props.getRooms();
  }
  changePublicStatus() {
    this.props.makePublic_Private(this.props.shared);
  }


  render() {
    return (

      <Row>
        <Col s={12} m={6} l={6}>
          <div>
            <h3> Select your room  <button onClick={ () => {this.changePublicStatus()} }>public: {"" + this.props.shared}</button></h3>
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
    );
  }
}

function mapStateToProps({ rooms, roomSelected, shared }) {
  return { rooms, roomSelected, shared };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getRooms, selectRoom, makePublic_Private }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsList);
