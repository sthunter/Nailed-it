import React, { Component } from 'react';
import { Table, Col, Row  } from 'react-materialize';

class BudgetTable extends Component {

  constructor(props) {
    super(props);
    this.calculateBudget = this.calculateBudget.bind(this);
    this.totalCost = 0;
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
        <Row>
          <Col>
            <h5>Total Budget: { currentBudget || 'no budget' }</h5>
            <h5>Total Cost: { this.totalCost || 'no costs' }</h5>
          </Col>
          <Col>
            <h5>Budget Remaining: { currentBudget - this.totalCost }</h5>
          </Col>
        </Row>
      <Table>
        <thead>
          <tr>
            <th data-field="id">Room</th>
            <th data-field="price">Total Room Cost</th>
          </tr>
        </thead>
        <tbody>
          {BudgetRoom.map((roomName, id)=> {
            if (id === 0) {
              this.totalCost = 0;
            }
            let roomCost = calcBudget(roomName);
            this.totalCost += roomCost;
            //console.log(totalCost);
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
