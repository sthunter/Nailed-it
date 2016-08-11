import React, { Component } from 'react';
import { PieChart } from 'react-easy-chart';
import { Table, Col, Row  } from 'react-materialize';


class BudgetGraph extends Component {

  constructor(props) {
    super(props);
    this.generateData = this.generateData.bind(this);
    this.calculateBudget = this.calculateBudget.bind(this);
  
    }

  calculateBudget(roomname) {
    let sum = 0;

    if(this.props.rooms[roomname]) {
      let list = this.props.rooms[roomname].furniture;
      if(typeof(list) === 'object') {
        for(var key in list) {
          if(key){
            sum += Number(list[key].price);
          }
        }
      }
    }
    return sum;
  }

  getRandomColor() {
    var letters = '0123456789abcdef';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  generateData(rooms) {
    
    let arr = []
    let totalCost = 0;
    let currentBudget = this.props.budget;
    const roomsList = Object.keys(rooms);
    const calculateBudget = this.calculateBudget;
    const getRandomColor = this.getRandomColor;
    const toTitleCase = this.toTitleCase;

    roomsList.forEach(function(room){
      let calc = calculateBudget(room);
      
     
      var obj = {};
      obj["key"] = calc > 0 ? toTitleCase(room) : ' ';
      obj["value"] = calc;
      obj["color"] = rooms[room].color.hex;
      arr.push(obj)
      totalCost += calc;
    });
    
    let remainingBudget = currentBudget - totalCost;
    
    let costObj = {};
    costObj["key"] = remainingBudget >= 0 ? "Remaining Budget" : "";
    costObj["value"] = remainingBudget > 0 ? remainingBudget : 0;
    costObj["color"] = "#424242";
    arr.push(costObj);

    return arr;
  }

  render() {
    var genData;
    const CurrentRooms = this.props.rooms;
    const BudgetRoom = Object.keys(CurrentRooms);
    const currentBudget = this.props.budget;
    const calcBudget = this.calculateBudget;
    const toTitleCase = this.toTitleCase;

    if(Object.keys(this.props.rooms).length !== 0) {
      genData = this.generateData(CurrentRooms)
    }
    var that = this;

    return(
      Object.keys(that.props.rooms).length !== 0 ? 
        <div>
          <Row>
            <Col>
              <h5><b>Total Budget:</b> { currentBudget || 'no budget' }</h5>
              <h5><b>Total Cost:</b> { this.totalCost || 'no costs' }</h5>
              <h5><b>Budget Remaining:</b> { 
                currentBudget - this.totalCost > 0 ? currentBudget - this.totalCost : <span style={{'color': 'red'}}>{currentBudget - this.totalCost}</span>
              }</h5>
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
              return (
                <tr 
                key={id}>
                  <th>{ toTitleCase(roomName) }</th>
                  <th>{ calcBudget(roomName) } </th>
                </tr>
                )
            })}
          </tbody>
        </Table>  

        <PieChart
            labels
            size={ 330 }
            data={ genData }
            clickHandler={(selection) => {
              let data = this.props.onClick(selection.data);
            }}

          />
        </div> : <div>Loading...</div>
    )
  }
} 

export default BudgetGraph;
              // console.log(selection)
              // console.log(selection.data)
              // console.log(selection.data.key)