import { SELECT_ROOM } from '../actions/rooms.action';

const selectRoomReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_ROOM:
      return action.room;
    default:
      return state;
  }
};

export default selectRoomReducer;
