import { GET_BUDGET, UPDATE_BUDGET, UPDATE_GRAPH } from '../actions/budgetView.action';

const budgetReducer = (state = null, action) => {
  switch (action.type) {
    case GET_BUDGET:
      return action.payload.val();
    case UPDATE_BUDGET:
      return action.newBudget;
    case UPDATE_GRAPH:
      return action.payload;
    default:
      return state;
  }
}

export default budgetReducer;