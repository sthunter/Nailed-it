import { ADD_ROOM } from '../actions/rooms.action';

// Todo: Check if the name already exists in the state
const roomsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ROOM:

      const newRoomOrRooms = [action.room.roomName];
      //const newRoomOrRooms = typeof action.room === 'Object' ?
      //  [{
      //    name: action.room,
      //    furniture: []
      //  }] :
      //  action.room.map(room => ({
      //    name: room,
      //      furniture: []
      //  }));
      return [
        ...state,
        ...newRoomOrRooms
      ];
    default:
      return state;
  }
};

export default roomsReducer;

