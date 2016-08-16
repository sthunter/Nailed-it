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
              
              <Table>
                <thead>
                  <tr>
                    <th data-field="room"  onClick={()=> {this.filterByRoomName()}} >Room Name</th>
                    <th data-field="furniture" onClick={()=> {this.filterByFurnitureName()}} >Furniture Name</th>
                    <th data-field="price" onClick={()=> {this.filterByFurniturePrice()}} >Item Price</th>
                    <th data-field="size">Item Size</th>
                    <th data-field="quantity">Item Quantity</th>
                    <th data-field="notes">Notes</th>
                    <th data-field="deliveryDate" onClick={()=> {this.filterByDeliveryDate()}} >Delivery Date</th>
                    

                  </tr>
                </thead>
                {furnitureList.map(function(data, i){
                  
                      return (
                        <tr key={i} id="table-item">
                          <td className="slimDown"><b>{  data.roomName || "" }</b></td>
                          <td className="slimDown"> { data.furnitureName } </td>
                          <td className="slimDown"> { data.furnitureObj.price } </td>
                          <td className="slimDown"> { data.furnitureObj.size } </td>
                          <td className="slimDown"> { data.furnitureObj.quantity } </td>
                          <td className="slimDown"> { data.furnitureObj.notes } </td>
                          <td className="slimDown"> { data.furnitureObj.deliveryDate } </td>
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