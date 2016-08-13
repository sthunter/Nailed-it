import React, { Component } from 'react';
import { Table, Card, CardTitle, Row, Col } from 'react-materialize';
//import AddItemButton from '../../app/addItemButton.component.jsx';
import ColorPalette from '../../colorPalette/containers/colorPalette.container'
//import AddFurnitureForm from '../containers/addFurnitureForm.container'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteFurniture } from '../actions/furniture.action'

class FList extends Component {

  changeHandler() {

  }
  deleteFurnitureCall(itemName) {
    let currentRoom = this.props.roomSelected;

    this.props.deleteFurniture(itemName, currentRoom);
  }


  render() {
    const listNames = Object.keys(this.props.list);
    const list = this.props.list;
    return (
      <div>
        <Row>
          <div className='center-align'><ColorPalette /></div>
        </Row>
      <Row>
       <div className="CardList">
        {listNames.map((itemName, i) => {
          return (
            <div key={i}>
              <Col l={4} m={6} s={12}>
              <Card 
              className='card-panel hoverable' header={<CardTitle reveal image={ list[itemName].url ||"http://blog.wanken.com/wp-content/uploads/2010/10/Eames-Lounge-Chair-and-Ottoman.jpeg" } waves='light'/>}
                title={itemName}

                reveal={
                  
                  <Table>
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>Price</td>
                        <td>URL</td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td>Quantity</td>
                        <td>Delivery Date</td>
                      </tr>
                      <tr>
                        <td>Notes</td>
                      </tr>
                    </tbody>
                  </Table>
                  
                }>
                <div className='card-control' hoverable><i className="card-controls material-icons md-dark" onClick={() => {this.deleteFurnitureCall(itemName)}}>delete</i></div>
                <span className='card-body'>Price: ${this.props.list[itemName].price} <a href={this.props.list[itemName].url}>Link</a></span>
              </Card>
              </Col>
            </div>
          );
        })}
      </div>
      </Row>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return   bindActionCreators({ deleteFurniture }, dispatch);
}

function mapStateToProps({ rooms, roomSelected }) {
  return { rooms, roomSelected };
}

export default connect(mapStateToProps, mapDispatchToProps)(FList);


