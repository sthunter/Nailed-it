import { ADD_PROJECT } from '../actions/public.action';
import _ from 'lodash';

const projectReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case ADD_PROJECT:
      action.room = action.room || {};
      const newRooms = Object.keys(action.room);
      if (newRooms.some(roomName => state[roomName])) { // If any new room name already exists in state
        // Todo: Check if the room already exists in the state
      }
      return Object.assign(_.cloneDeep(state), action.project);
    default:
      return state;
  }
};

export default projectReducer;

/*
 deliveryDate
 :
 undefined
 description
 :
 undefined
 itemName
 :
 "aoe"
 price
 :
 "oae"

 url
 :
 undefined
 */
