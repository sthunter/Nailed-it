export const ADD_FURNITURE = 'ADD_FURNITURE';

/*
 * action creators
 */
export function addFurniture(furniture, room) {
  return {
    type: ADD_FURNITURE,
    furniture,
    room
  }; // NOTE: The reducer is in rooms.reducer, not in the furniture directory
}
