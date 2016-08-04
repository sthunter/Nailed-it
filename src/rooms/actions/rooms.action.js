import { getRooms as getter, addRoom as adder } from '../../databaseAPI';


//fixed where the promise was getting resolved so this is no longer needed 


// export function addRoomFromDb(room) {
//   const roomObj = room;
//   room = Object.keys(roomObj)[0];

//   const roomWithEmptyFurniture = {};
//   roomWithEmptyFurniture[room] = { furniture: {} };
//   const newRoom = Object.assign({}, roomWithEmptyFurniture, roomObj);

//   return {
//     type: ADD_ROOM, // Note that this uses the same reducer as the addRoom function uses
//     room: newRoom,
//   };
// }

export const ADD_ROOM = 'ADD_ROOM';

export function addRoom(room) {
  const roomName = room.roomName;
  room = {};
  room[roomName] = { furniture: {} };
  console.log(adder);
  adder(room, roomName);
  return {
    type: ADD_ROOM,
    room,
  };
}

export const MAKE_PUBLIC_PRIVATE = 'MAKE_PUBLIC_PRIVATE';
export function makePublic_Private(shared) {
  return {
    type: MAKE_PUBLIC_PRIVATE,
    shared,
  };
}

export const SELECT_ROOM = 'SELECT_ROOM';
export function selectRoom(roomName) {
  return {
    type: SELECT_ROOM,
    roomName,
  };
}

//payload lets the firebase promise resolve in transit to reducer
export const GET_ROOMS = 'GET_ROOMS';
export function getRooms() {
  let rooms = getter();

  return {
    type: GET_ROOMS,
    payload: rooms
  };
}
