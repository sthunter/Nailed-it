export const ADD_FURNITURE = 'ADD_FURNITURE';

/*
 * action creators
 */
 
export function addFurniture(furniture) {
  return {
    type: ADD_FURNITURE,
    furniture
  };
}

