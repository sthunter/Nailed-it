import { ADD_ROOM } from '../actions/rooms.action';

// Todo: Check if the name already exists in the state
const roomsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ROOM:
      return [
        ...state,
        ...action.newRoomOrRooms
      ];
    default:
      return state;
  }
};

export default roomsReducer;

