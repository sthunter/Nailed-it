import { SELECT_PROJECT } from '../actions/public.action';

const selectProjectReducer = (state = '', action) => {
  switch (action.type) {
    case SELECT_PROJECT:
      return action.projectName;
    default:
      return state;
  }
};

export default selectProjectReducer;
