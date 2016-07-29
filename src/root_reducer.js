import { combineReducers } from 'redux';
import { addFurniture } from './furniture/reducers/add.furniture.reduce';

const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;
