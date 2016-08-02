import React, { Component } from 'react';
import { Table  } from 'react-materialize';

class BudgetTable extends Component {
  
  render() {

  const BudgetRoom = Object.keys(this.props.list);
  const currentBudget = this.props.budget;
  console.log(this.props.list);

    return (
    
      <div>
        <h3>Total Budget: { currentBudget || 'no budget' }</h3>
      <Table>
        <thead>
          <tr>
            <th data-field="id">Room</th>
            <th data-field="price">Total Room Cost</th>
          </tr>
        </thead>
        <tbody>
          {BudgetRoom.map((roomName)=> {
            return (
              <tr>
                <th>{ roomName }</th>
                <th>blah</th>
              </tr>
              )
          })}
        </tbody>
      </Table>
      </div>
    )
  }
}

export default BudgetTable;

          // <tr>
          //   <td>{}</td>
          //   <td>$0.87</td>
          // </tr>