import React, { Component } from 'react';
import { Row, Col }  from 'react-materialize';
import BudgetTable from './BudgetTable';
import BudgetGraph from './BudgetGraph';

class BudgetView extends Component {
  render() {
    return(
      <BudgetTable />
      <BudgetGraph />
    )
  }
} 

export default BudgetView;