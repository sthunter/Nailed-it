import React, { Component } from 'react';
import { Table, Card, CardTitle } from 'react-materialize';
import AddItemButton from './addItemButton.component';

class FList extends Component {
  render() {
    const listNames = Object.keys(this.props.list);
    return (
      <div className="CardList">
        {listNames.map((itemName) => {
          return (
            <div l={3} s={12}>
              <Card header={<CardTitle reveal image={"http://blog.wanken.com/wp-content/uploads/2010/10/Eames-Lounge-Chair-and-Ottoman.jpeg"} waves='light'/>}
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
            </div>
          );
        })}
        <AddItemButton view={this.props.view === 'rooms' ? 'room' : 'furniture'} />
      </div>
    );
  }
}

export default FList;
