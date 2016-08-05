import React, { Component } from 'react';
import { PieChart } from 'react-easy-chart';

class BudgetGraph extends Component {

  constructor(props) {
    super(props);
    
    this.generateData = this.generateData.bind(this);
    }

  generateData(rooms) {
    
    let arr = [];
    let totalCost = 0;
    let currentBudget = this.props.budget;
    const roomsList = Object.keys(rooms);

    var getRandomColor = function() {
      var letters = '0123456789abcdef';
      var color = '#';
      for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    var calculateBudget = function(roomname){
     let sum = 0;

      if(rooms[roomname]) {
        let list = rooms[roomname].furniture;
        for(var key in list) {
          if(key){
            sum += Number(list[key].price);
          }
        }
      }
      return sum;
    }

    
    roomsList.forEach(function(room){
      let calc = calculateBudget(room);
     
      var obj = {};
      obj["key"] = room;
      obj["value"] = calc;
      obj["color"] = getRandomColor();
      arr.push(obj)
      totalCost += calc;
    });
    
    let remainingBudget = currentBudget - totalCost;
    
    let costObj = {};
    costObj["key"] = "Remaining Budget";
    costObj["value"] = remainingBudget;
    costObj["color"] = "#00ff00";
    arr.push(costObj);

    return arr;
  }

  render() {
    var genData;
    if(Object.keys(this.props.rooms).length !== 0) {
      genData = this.generateData(this.props.rooms)
    }
    var that = this;

    return(
      Object.keys(that.props.rooms).length !== 0 ? <div>
        <PieChart
          labels
          data={ genData }
        />
      </div> : <div>Loading...</div>
    )
  }
} 

export default BudgetGraph;