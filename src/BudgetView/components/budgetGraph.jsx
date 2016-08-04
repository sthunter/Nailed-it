import React, { Component } from 'react';
import { }  from 'react-materialize';
import { PieChart } from 'react-easy-chart';

class BudgetGraph extends Component {

  constructor(props) {
    super(props);
    
    this.generateData = this.generateData.bind(this);
  }

  // test() {
  //   return [
  //           {key: 'A', value: 100, color: '#aaac84'},
  //           {key: 'B', value: 200, color: '#dce7c5'},
  //           {key: 'C', value: 50, color: '#e3a51a'}
  //         ]
  // }

generateData(rooms) {
  
  let arr = [];
  // const roomsList = Object.keys(rooms);
  // console.log('keys: ', Object.keys(rooms));
  const roomsList = ['bathroom', 'bedroom', 'dining room', 'living room', 'kitchen'];
  // const roomsList = [1,2,3,4,5]
  

  var getRandomColor = function() {
      var letters = '0123456789abcdef';
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
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

  roomsList.map(function(room, id){
    // for(let room in rooms){
      // if(rooms.hasOwnProperty(room)){
        var obj = {};
        obj["key"] = room;
        obj["value"] = calculateBudget(room);
        obj["color"] = getRandomColor();
        
        arr.push(obj)
   //    }
   // }
  });
      
    return arr;
}

  render() {
    const genData = this.generateData(this.props.rooms)
    
    // const test = this.test();
    // console.log('test invoked', test)
    return(
      <div>
        <PieChart
          labels
          data={ genData }
        />
      </div>
    )
  }
} 

export default BudgetGraph;