import React, { Component } from 'react';
import { Table, Card, CardTitle, Row, Col, Input} from 'react-materialize';
import AddItemButton from '../../app/addItemButton.component.jsx';
import { connect } from 'react-redux';
import furnitureHelper from '../furnitureHelper';
import FlatButton from 'material-ui/FlatButton';


class ListingFurniture extends Component {
  toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
  constructor(props) {
    super(props);
  }
  state = {
    filter: furnitureHelper.listByFurniture,
  }
  filterByFurnitureName() {
    this.setState({filter: furnitureHelper.filterByFurniture});
  }
  filterByFurniturePrice() {
    this.setState({filter: furnitureHelper.filterByPrice});
  }
  filterByDeliveryDate() {
    this.setState({filter: furnitureHelper.filterByDate});
  }
  filterByRoomName = () => {
    this.setState({filter: furnitureHelper.filterByRoom});
  }
  unfilter() {
    this.setState({filter: furnitureHelper.listByFurniture});
  }
  render () {
    const { rooms } = this.props;
    const roomName = Object.keys(rooms);
    const toTitleCase = this.toTitleCase;
    let furnitureList = this.state.filter(rooms);
    
    //const roomList = furnitureHelper.listByRoom(rooms);


      return (

        <div className="container">
          
              <h4>Full furniture list</h4>
              <Row>
                <Col s={2}>
                  <FlatButton onClick={()=> {this.filterByFurnitureName()}} label={'By Name'} waves='light'/>
                </Col>
                <Col s={2}>
                  <FlatButton onClick={()=> {this.filterByRoomName()}} label={'By Room Name'} waves='light'/>
                </Col>
                <Col s={2}>
                  <FlatButton onClick={()=> {this.filterByFurniturePrice()}} label={'By Price'} waves='light'/>
                </Col>
                <Col s={2}>
                  <FlatButton onClick={()=> {this.filterByDeliveryDate()}} label={'By ETA'} waves='light' />
                </Col>
                <Col s={2}>
                  <FlatButton onClick={()=> {this.unfilter()}}label={'Reset'} waves='light' />
                </Col>
              </Row>
              <Table>
                <thead>
                  <tr>
                    <th data-field="room">Room</th>
                    <th data-field="furniture">Furniture</th>
                    <th data-field="price">Item Price</th>
                    <th data-field="size">Item Size</th>
                    <th data-field="quantity">Item Quantity</th>
                    <th data-field="notes">Notes</th>
                    <th data-field="notes">Delivery Date</th>
                    

                  </tr>
                </thead>
                {furnitureList.map(function(triple, i){
                  
                      return (
                        <tr key={i} id="table-item">
                          <td className="slimDown"><b>{  triple[1] || "" }</b></td>
                          <td className="slimDown"> { triple[0] } </td>
                          <td className="slimDown"> { triple[2].price} </td>
                          <td className="slimDown"> { triple[2].size} </td>
                          <td className="slimDown"> { triple[2].quantity} </td>
                          <td className="slimDown"> { triple[2].notes} </td>
                          <td className="slimDown"> { triple[2].deliveryDate} </td>
                        </tr>
                    )
                })}
                
                <tbody>
                </tbody>
              </Table>
           
        </div>


      )
  }
}

function mapStateToProps({ rooms, roomSelected }) {
  return { rooms, roomSelected };
}


export default connect(mapStateToProps)(ListingFurniture);