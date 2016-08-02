export const ADD_ROOM = 'ADD_ROOM';
export function addRoom(room /* string or object */) {
  let roomObj;
  if (typeof room === 'String') { // e.g. Parlor
    roomObj = {};
    roomObj[room] = {}; // --> { parlor: {} }
    room = roomObj;
  } else { // else room is an object like { parlor: {} }
    roomObj = room;
    room = Object.keys(roomObj)[0];
  }

  const roomWithEmptyFurniture = {};
  roomWithEmptyFurniture[room] = { furniture: {} }
  const newRoom = Object.assign({}, roomWithEmptyFurniture, roomObj);

  const action = {
    type: ADD_ROOM,
    room: newRoom
  };
  return action;
}

export const SELECT_ROOM = 'SELECT_ROOM';
export function selectRoom(roomName) {
  return {
    type: SELECT_ROOM,
    roomName
  };
}

// Todo:
// update room
// removeRoom
