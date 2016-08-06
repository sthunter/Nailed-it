import React, { Component } from 'react';
import { Table, Card, CardTitle, Row, Col } from 'react-materialize';
import AddItemButton from '../../app/addItemButton.component.jsx';
import ColorPalette from '../../colorPalette/components/colorPalette.component'

class FList extends Component {
  render() {
    const listNames = Object.keys(this.props.list);
    return (
      <Row>
      <ColorPalette
        colors={ ['#45425A', '#575C55', '#6C7D47', '#96A13A', '#ACC12F'] }
      />
      <div className="CardList">
        {listNames.map((itemName) => {
          return (
            <div> 
              <Col l={3} s={12}>
              <Card className='card-panel hoverable' header={<CardTitle reveal image={ "http://blog.wanken.com/wp-content/uploads/2010/10/Eames-Lounge-Chair-and-Ottoman.jpeg" } waves='light'/>}
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
