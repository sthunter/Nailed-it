import { GET_BUDGET, UPDATE_BUDGET } from '../actions/budgetView.action';

const budgetReducer = (state = null, action) => {
  switch (action.type) {
    case GET_BUDGET:
      return action.payload.val();
    case UPDATE_BUDGET:
      return action.newBudget;
    default:
      return state;
  }
}

export default budgetReducer;