import React, { Component } from 'react';
import {Card, CardTitle, Table, Row, Col} from 'react-materialize';
import './COMPONENT.css';

export default class FurnitureDetail extends Component {
  render() {
    return (
      <Row>
      <Col s={12} m={6} l={6}>
        <Card header={<CardTitle reveal image={"https://eamesloungechairreplica.files.wordpress.com/2014/12/cheap-prices-eames-lounge-chair-cover.jpg"} waves='light'/>}
          title="Eames Chair"
           reveal={
            <Table responsive >
              <tbody>
                <tr>
                  <td>Price: $3,899</td>
                  <td>url: <a href="www.dwr.com">www.dwr.com</a></td>
                  <td>Lead Time: 2 weeks</td>
                </tr>
              </tbody>
            </Table>
          }>

        </Card>
        </Col>
      </Row>
    )
  }
}