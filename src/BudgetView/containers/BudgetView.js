import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BudgetTable from '../components/BudgetTable';
import BudgetGraph from '../components/BudgetGraph';
import { getBudget } from '../actions/budgetView.action';


class BudgetView extends Component {
  componentWillMount() {
    this.props.getBudget();
  }
  
  render() {
    return(
      <div>
        <BudgetTable budget={this.props.budget} rooms={this.props.rooms}/>
        <BudgetGraph rooms={this.props.rooms}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    budget: state.budget
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getBudget}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetView);

