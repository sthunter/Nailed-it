import React, { Component } from 'react';
import BudgetTable from './BudgetTable';
import BudgetGraph from './BudgetGraph';

class BudgetView extends Component {
  render() {
    return(
      <div>
        <BudgetTable />
        <BudgetGraph />
      </div>
    )
  }
}

export default BudgetView;