export const ADD_ROOM = 'ADD_ROOM';
export function addRoom(room) {
  const newRoomsWithoutFurniture = Array.isArray(room) ?
    room :
    [room];

  const newRoomOrRooms = newRoomsWithoutFurniture
    .map(room => Object.assign({}, room, { furniture: [] }));

  return {
    type: ADD_ROOM,
    newRoomOrRooms
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
