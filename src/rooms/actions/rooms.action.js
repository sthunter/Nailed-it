export const ADD_ROOM = 'ADD_ROOM';
export function addRoom(room) {
  return {
    type: ADD_ROOM,
    room
  };
}

export const SELECT_ROOM = 'SELECT_ROOM';
export function selectRoom(room) {
  return {
    type: SELECT_ROOM,
    room
  };
}

// Todo:
// update room
// removeRoom
