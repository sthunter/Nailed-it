import { SELECT_ROOM } from '../actions/rooms.action';

const selectRoomReducer = (state = '', action) => {
  switch (action.type) {
    case SELECT_ROOM:
      return action.roomName;
    default:
      return state;
  }
};

export default selectRoomReducer;
