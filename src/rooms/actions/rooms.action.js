export const ADD_ROOM = 'ADD_ROOM';
export function addRoom(room) {
  return {
    type: ADD_ROOM,
    room
  };
}

export const ROOM_SELECTED = 'ROOM_SELECTED';
export function roomSelected(room) {
  return {
    type: ROOM_SELECTED,
    room
  };
}

// Todo:
// update room
// removeRoom
