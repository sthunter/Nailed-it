import React, { Component } from 'react';
import { Table  } from 'react-materialize';

class BudgetTable extends Component {

  constructor(props) {
    super(props);
    this.calculateBudget = this.calculateBudget.bind(this);
  }

  calculateBudget(roomname) {
    let sum = 0;

    if(this.props.rooms[roomname]) {
      let list = this.props.rooms[roomname].furniture;
      for(var key in list) {
        if(key){
          sum += Number(list[key].price);
        }
      }
    }
    return sum;
  }

  render() {

    const CurrentRoom = this.props.rooms;
    const BudgetRoom = Object.keys(CurrentRoom);
    const currentBudget = this.props.budget;
    const calcBudget = this.calculateBudget;

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
          {BudgetRoom.map((roomName, id)=> {
            return (
              <tr key={id}>
                <th>{ roomName }</th>
                <th>{calcBudget(roomName)} </th>
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
