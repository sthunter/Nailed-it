import databaseAPI from '../../databaseAPI';
import _ from 'lodash';

export const ADD_PHOTO = 'ADD_PHOTO';
export function addPhoto(file, selectedRoom) {
  return function(dispatch) {
    databaseAPI.uploadPhoto(file).then(function(snapshot) {
      var url = snapshot.metadata.downloadURLs[0];
      databaseAPI.updatePhotoURL(url, selectedRoom);
      dispatch({
        type: ADD_PHOTO,
        url,
        selectedRoom: selectedRoom,
      });
    });
  };
}

//adds room to the redux rooms state and makes database call along the way
export const ADD_ROOM = 'ADD_ROOM';
export function addRoom(details, ignoreDbCall) {
  const roomContents = {
    size: (details && details.size)|| false,
    notes: (details && details.notes)|| false,
    color: {hex: '#d3d3d3'},
  };

  let toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  };
  details.roomName = toTitleCase(details.roomName);

  if (!(ignoreDbCall === true)) {
    //database call sends room with a empty object to later store new furniture
    databaseAPI.addRoom(roomContents, details && details.roomName);
  }

  return {
    type: ADD_ROOM,
    roomName: details && details.roomName,
    contents: roomContents,
  };
}

export const UPDATE_ROOM_DETAILS = 'UPDATE_ROOM_DETAILS';
export function updateRoomDetails(oldRoomName, roomContents, newRoomDetails, ignoreDbCall) {
  const clonedRoom = _.cloneDeep(roomContents);
  const newRoomName = newRoomDetails.roomName;
  delete newRoomDetails.roomName;
  Object.assign(clonedRoom, newRoomDetails);

  if (!ignoreDbCall) {
    databaseAPI.updateRoom(oldRoomName, newRoomName, clonedRoom);
  }

  return {
    type: UPDATE_ROOM_DETAILS,
    oldRoomName,
    newRoomName,
    contents: clonedRoom,
  };
}

export const MAKE_PUBLIC_PRIVATE = 'MAKE_PUBLIC_PRIVATE';
export function makePublic_Private(newPublicStatus) {
  // Update the public status of the project in the database
  databaseAPI.toggleProjectPrivacy(newPublicStatus);

  return {
    type: MAKE_PUBLIC_PRIVATE,
    newPublicStatus,
  };
}

export const GET_COLOR = "GET_COLOR";
export function getColor(color, room) {
    databaseAPI.updateRoomColor(color, room);
  return {
    type: GET_COLOR,
    color,
    room
  }
}

export const SET_DESIGN = "SET_DESIGN";
export function setRoomDesign(design, room) {
  return {
    type: SET_DESIGN,
    design,
    room
  }
}

export const UPDATE_DESIGN = "UPDATE_DESIGN";
export function updateRoomDesign(design, room) {
  databaseAPI.updateRoomDesign(design, room);
  return {
    type: UPDATE_DESIGN,
    design,
    room
  }
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
  let rooms = databaseAPI.getRooms();

  return {
    type: GET_ROOMS,
    //promise passed as action.payload
    payload: rooms
  };
}

export const REMOVE_ROOM = 'REMOVE_ROOM';
export function removeRoom(title) {
  databaseAPI.removeRoom(title);
  return {
    type: REMOVE_ROOM,
    title,
  };
}
