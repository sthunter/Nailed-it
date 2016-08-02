import React, { Component } from 'react';
import {MediaBox, Table, Row, Col} from 'react-materialize';
import './COMPONENT.css';

export default class FurnitureDetail extends Component {
  render() {
    return (
      <div centered={true}>
        <Row centered="true">
          <Col s={12} centered="true">
            <MediaBox src="http://blog.wanken.com/wp-content/uploads/2010/10/Eames-Lounge-Chair-and-Ottoman.jpeg" centered='true' caption="Test" width="650"/>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Table responsive >
              <tbody>
                <tr>
                  <td>Price: $3,899</td>
                  <td>url: <a href="www.dwr.com">www.dwr.com</a></td>
                  <td>Lead Time: 2 weeks</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    )
  }
}
            // <img centered="true" style={src="https://eamesloungechairreplica.files.wordpress.com/2014/12/cheap-prices-eames-lounge-chair-cover.jpg"/>