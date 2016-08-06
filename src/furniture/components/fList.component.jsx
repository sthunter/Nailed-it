import React, { Component } from 'react';
import { Table, Card, CardTitle, Row, Col } from 'react-materialize';
import AddItemButton from '../../app/addItemButton.component.jsx';
import ColorPalette from '../../colorPalette/containers/colorPalette.container'

class FList extends Component {
  render() {
    const listNames = Object.keys(this.props.list);
    return (
      <Row>
      <ColorPalette />
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
                <p>Price <a href="#">This is a link</a></p>
              </Card>
              </Col>
            </div>
          );
        })}
        <AddItemButton view={this.props.view === 'rooms' ? 'room' : 'furniture'} />
      </div>
      </Row>
    );
  }
}

export default FList;
