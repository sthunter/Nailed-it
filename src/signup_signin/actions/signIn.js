export const ADD_FURNITURE = 'ADD_FURNITURE';
export const DELETE_FURNITURE = 'DELETE_FURNITURE';
export const UPDATE_FURNITURE = 'UPDATE_FURNITURE';

// NOTE: Many corresponding reducers are in rooms.reducer, not in the furniture directory

export function addFurniture(roomName, furnitureProps) {
  //make sure that a room to add furniture is selected 
  return {
    type: ADD_FURNITURE,
    roomName,
    furnitureName,
    furnitureProps,
  };
}
