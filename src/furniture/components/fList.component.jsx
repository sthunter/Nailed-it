import React, { Component } from 'react';
import { Table, Card, CardTitle, Row, Col } from 'react-materialize';
import AddItemButton from '../../app/addItemButton.component.jsx';
import ColorPalette from '../../colorPalette/containers/colorPalette.container'
import AddFurnitureForm from '../containers/addFurnitureForm.container'

class FList extends Component {

  changeHandler() {

  }

  clickEdit() {

  }

  render() {
    const listNames = Object.keys(this.props.list);
    return (
      <div>
        <Row>
          <div className='center-align' ><ColorPalette /></div>
        </Row>
      <Row>
       <div className="CardList">
        {listNames.map((itemName, i) => {
          return (
            <div key = {i}> 
              <Col l={3} s={12}>
              <Card 
                className='card-panel hoverable' header={<CardTitle reveal image={ "http://blog.wanken.com/wp-content/uploads/2010/10/Eames-Lounge-Chair-and-Ottoman.jpeg" } waves='light'/>}
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
                <span className='card-body'>Price: ${this.props.list[itemName].price} <a href={this.props.list[itemName].url}>Link</a></span>
              </Card>
              </Col>
            </div>
          );
        })}


        <AddItemButton view={this.props.view === 'rooms' ? 'room' : 'furniture'} />
      </div>
      </Row>
      </div>
    );
  }
}

export default FList;

