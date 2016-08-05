import { getRooms as getter, addRoom as adder, removeRoom as remover, uploadPhoto } from '../../databaseAPI';

export const ADD_PHOTO = 'ADD_PHOTO';
export function addPhoto(file, selectedRoom) {
  console.log("got here")
  uploadPhoto(file);
  return {
    type: ADD_PHOTO,
    file,
  };
}

//adds room to the react rooms state and makes database call along the way
export const ADD_ROOM = 'ADD_ROOM';

export function addRoom(room) {
  const roomName = room.roomName;
  room = {};
  room[roomName] = { furniture: {} };
  //database call sends room with a empty object to later store new furniture
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

//initial pull from the database
export const GET_ROOMS = 'GET_ROOMS';
export function getRooms() {
  //database call with promise stored in rooms
  let rooms = getter();

  return {
    type: GET_ROOMS,
    //promise passed as action.payload
    payload: rooms
  };
}
export const REMOVE_ROOM = 'REMOVE_ROOM';
export function removeRoom(title) {
  remover(title)
  return {
    type: REMOVE_ROOM,
    title,
  };
}
