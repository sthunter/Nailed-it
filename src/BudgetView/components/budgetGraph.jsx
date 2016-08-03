import React, { Component } from 'react';
import { }  from 'react-materialize';
import { PieChart } from 'react-easy-chart';

class BudgetGraph extends Component {
  

  render() {
    return(
      <div>
        <PieChart
          data={[
            {key: 'A', value: 100, color: '#aaac84'},
            {key: 'B', value: 200, color: '#dce7c5'},
            {key: 'C', value: 50, color: '#e3a51a'}
          ]}
        />
      </div>
    )
  }
} 

export default BudgetGraph;