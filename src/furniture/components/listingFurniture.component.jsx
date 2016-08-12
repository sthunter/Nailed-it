import React, { Component } from 'react';
import { Table, Card, CardTitle, Row, Col } from 'react-materialize';
import AddItemButton from '../../app/addItemButton.component.jsx';
import { connect } from 'react-redux';


class ListingFurniture extends Component {
  toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  render () {
    const { rooms } = this.props;
    const roomName = Object.keys(rooms);
    const toTitleCase = this.toTitleCase;

      return (

        <div>
          
              <h4>Full furniture list</h4>
              <Table>
                <thead>
                  <tr>
                    <th data-field="room">Room</th>
                    <th data-field="furniture">Furniture</th>
                    <th data-field="price">Item Price</th>
                  </tr>
                </thead>
                {roomName.map(function(room){
                  let thing = rooms[room];

                  if(thing.furniture){
                    var arr = Object.keys(thing.furniture)
                    return arr.map(function(item, i){
                      return (
                        <tr>
                          <td><b>{ i===0 ? toTitleCase(room) : "" }</b></td>
                          <td>{ toTitleCase(item) }</td>
                          <td>{ thing.furniture[item].price} </td>
                        </tr>
                      )
                    })
                  }
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