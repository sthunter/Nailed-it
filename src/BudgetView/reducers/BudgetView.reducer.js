import { GET_BUDGET } from '../actions/budgetView.action';

const budgetReducer = (state = null, action) => {
  switch (action.type) {
    case GET_BUDGET:
      return action.budget;
    default:
      return state;
  }
}

export default budgetReducer;