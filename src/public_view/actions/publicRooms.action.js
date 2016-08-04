export const ADD_ROOM = 'ADD_ROOM';

export function addRoomFromDb(room) {
  const roomObj = room;
  room = Object.keys(roomObj)[0];

  const roomWithEmptyFurniture = {};
  roomWithEmptyFurniture[room] = { furniture: {} };
  const newRoom = Object.assign({}, roomWithEmptyFurniture, roomObj);

  return {
    type: ADD_ROOM, // Note that this uses the same reducer as the addRoom function uses
    room: newRoom,
  };
}

export const SELECT_ROOM = 'SELECT_ROOM';
export function selectRoom(roomName) {
  return {
    type: SELECT_ROOM,
    roomName,
  };
}
