import React, { Component } from 'react';
import { Table, Col, Row  } from 'react-materialize';
import budgetHelper from '../budgetHelperFunctions';
import PieChartHolder from './pieChartHolder.component.jsx';

class BudgetGraph extends Component {
  render() {
    var genData;  
    const { rooms, budget } = this.props;
    const roomNames = Object.keys(rooms);
    const calculateRoomCost = budgetHelper.calculateRoomCost;
    const totalCost = budgetHelper.calculateTotalCost(rooms);
    if(Object.keys(rooms).length !== 0) {
      genData = budgetHelper.generateData(rooms, budget);
    }

    Number.prototype.formatMoney = function(c, d, t){
      var n = this;
       c = isNaN(c = Math.abs(c)) ? 2 : c;
       d = d === undefined ? "." : d;
       t = t === undefined ? "," : t;
       let s = n < 0 ? "-" : "";
       let i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "";
       let j = (j = i.length) > 3 ? j % 3 : 0;
       return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
     };

    if(budget) {
      var formattedBudget = (budget).formatMoney(0);
    }
    if(totalCost) {
      var formattedCost = (totalCost).formatMoney(0);
    }

    return(
      Object.keys(rooms).length !== 0 ? 
        <div>
          <Row>
            <Col>
              <h5><b>Total Budget:</b> ${ formattedBudget || 'no budget' }</h5>
              <h5><b>Total Cost:</b> ${ formattedCost || 'no costs' }</h5>
              <h5><b>Budget Remaining:</b> { 
                budget - totalCost > 0 ? "$"+ (budget - totalCost).formatMoney(0) : <span style={{'color': 'red'}}>${(budget - totalCost).formatMoney(0)}</span>
              }</h5>
            </Col>
          </Row>
        <Table>
          <thead>
            <tr>
              <th className="budget-table" data-field="id">Room</th>
              <th className="budget-table" data-field="price">Total Room Cost</th>
            </tr>
          </thead>
          <tbody>
            {roomNames.map((roomName, id)=> {
              let roomCost = calculateRoomCost(roomName, rooms);
              return (
                <tr key={id}>
                  <th className="budget-table">{ budgetHelper.toTitleCase(roomName) }</th>
                  <th className="budget-table">${ (roomCost).formatMoney(0) } </th>
                </tr>
                )
            })}
          </tbody>
        </Table> 
        <br/>
        <br/> 
        <div className="center-align"><PieChartHolder genData={genData} /></div>
        </div> : <div>Loading...</div>
    )
  }
} 

export default BudgetGraph;
