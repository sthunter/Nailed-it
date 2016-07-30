import React, { Component } from 'react';
import { Table, Col  } from 'react-materialize';

class BudgetTable extends Component {
  render() {
    return (
    
      <div>
      <Table>
        <thead>
          <tr>
            <th data-field="id">Name</th>
            <th data-field="name">Item Name</th>
            <th data-field="price">Item Price</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alvin</td>
            <td>Eclair</td>
            <td>$0.87</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
          </tr>
        </tbody>
      </Table>
      </div>
    )
  }
}

export default BudgetTable;