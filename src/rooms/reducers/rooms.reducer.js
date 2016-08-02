import { ADD_ROOM } from '../actions/rooms.action';
import { ADD_FURNITURE, DELETE_FURNITURE, UPDATE_FURNITURE } from '../../furniture/actions/furniture.action';
import _ from 'lodash';

const roomsReducer = (state = {}, action) => {
  const rooms = Object.keys(state);
  let newState;
  switch (action.type) {
    case ADD_ROOM:
      action.room = action.room || {};
      const newRooms = Object.keys(action.room);
      if (newRooms.some(roomName => state[roomName])) { // If any new room name already exists in state
        // Todo: Check if the room already exists in the state
      }
      return Object.assign(_.cloneDeep(state), action.room);
    case ADD_FURNITURE:
      newState = _.clone(state);
      const furnitureName = Object.keys(action.furnitureName)[0];
      newState[action.roomName][furnitureName] = action.furnitureName[furnitureName];
      return newState;
    case DELETE_FURNITURE:
      newState = _.clone(state);
      delete newState[action.roomName].furniture[action.furnitureName];
      return newState;
    case UPDATE_FURNITURE:
      newState = _.clone(state);
      Object.assign(newState[action.roomName].furniture[action.furnitureName],
        action.newProps);
      return newState;
  }

  return state;
};

export default roomsReducer;
