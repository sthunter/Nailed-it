import { addFurniture, ADD_FURNITURE } from '../actions/add.furniture.action';

function addFurniture(state = [], action) {
  switch (action.type) {
    case ADD_FURNITURE:
      return [
        ...state,
        {
          color: action.color,
          name: action.name
        }
      ];
    default:
      return state;
  }
}
