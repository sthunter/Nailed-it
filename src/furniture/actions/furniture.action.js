import databaseAPI from '../../databaseAPI';

export const ADD_FURNITURE = 'ADD_FURNITURE';
export const DELETE_FURNITURE = 'DELETE_FURNITURE';
export const UPDATE_FURNITURE = 'UPDATE_FURNITURE';

// NOTE: Many corresponding reducers are in rooms.reducer, not in the furniture directory

export function addFurniture(roomName, furnitureProps) {
  //make sure that a room to add furniture is selected 
  if (!roomName) {
    return {
      type: ADD_FURNITURE,
      roomName,
      furnitureProps,
    };
  }
  //pull name property off of field input and delete the property from furnitureProps
  let furnitureName = furnitureProps.itemName;
  delete furnitureProps.itemName;

  //create new Obj to pass to database
  let furnitureObj = {};
  //only pass over defined variables to stop undefined from interrupting database call
  for (var prop in furnitureProps) {
    if (furnitureProps[prop] !== undefined) {
      furnitureObj[prop] = furnitureProps[prop];
    }
  }
  //database call
  databaseAPI.updateFurniture(roomName, furnitureName, furnitureObj)

  //send the expected value to the reducer
  return {
    type: ADD_FURNITURE,
    roomName,
    furnitureName,
    furnitureProps,
  };
}

export function deleteFurniture(furnitureName, roomName) {
  return {
    //databaseAPI.deleteFurniture(furnitureName, roomName);
    type: DELETE_FURNITURE,
    furnitureName,
    roomName
  };
}

export function updateFurniture(furnitureName, roomName, newProps) {
  return {
    type: UPDATE_FURNITURE,
    roomName,
    furnitureName,
    newProps
  }
}