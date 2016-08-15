import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Button, Input} from 'react-materialize';
import BudgetTable from '../components/BudgetTable';
import BudgetGraph from '../components/BudgetGraph';
import { getBudget, updateBudget, updateGraph } from '../actions/budgetView.action';
import { reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';



class BudgetView extends Component {
  componentWillMount() {
    this.props.getBudget();
  }
  
  render() {
    const { fields: { newBudget }, handleSubmit } = this.props;
    return(
      <div>
        <form onSubmit={ handleSubmit(this.props.updateBudget) }>
          <Input type="number" placeholder="Budget" s={12} label="Budget" { ...newBudget } />
          <RaisedButton label="Update" type="submit"/>
        </form>
        
        <BudgetGraph onClick={updateGraph} budget={this.props.budget} rooms={this.props.rooms}/>
      
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     budget: state.budget
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({getBudget}, dispatch);
// }

export default reduxForm({
  form: 'BudgetView',
  fields: ['newBudget']
}, state => ({ budget: state.budget, data: state.onClick}),{ getBudget, updateBudget, updateGraph })(BudgetView);

