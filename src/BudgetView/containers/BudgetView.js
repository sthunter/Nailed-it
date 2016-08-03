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
  }

  render() {
    return(
      <div>
        <BudgetTable budget={this.props.budget} rooms={this.props.rooms}/>
        <BudgetGraph rooms={this.props.rooms}/>
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

