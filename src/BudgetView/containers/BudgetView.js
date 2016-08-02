import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BudgetTable from '../components/BudgetTable';
import BudgetGraph from '../components/BudgetGraph';
import { getBudget } from '../../databaseAPI';
import { GetBudget } from '../actions/budgetView.action'


class BudgetView extends Component {
  componentWillMount() {

    getBudget(this.props.GetBudget.bind(this));
    //GetBudget(5000);
  }

  render() {
    return(
      <div>
        <h3>Total Budget: { this.props.budget || 'no budget' }</h3>
        <BudgetTable />
        <BudgetGraph />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    budget: state.budget,
    // roomSelected: state.roomSelected
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({GetBudget}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetView);

