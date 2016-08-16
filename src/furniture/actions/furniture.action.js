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
    databaseAPI.removeFurniture(furnitureName, roomName);
  return {
    type: DELETE_FURNITURE,
    furnitureName,
    roomName
  };
}

export function updateFurniture(originalFurnitureName, roomName, currentFurnitureProps, newProps) {
  // Iterate through the new furniture properties, and merge them with the current
  // furniture properties. The new object should not any undefined values. We also want to ignore the 'itemName'
  // property, which shouldn't be stored as a property of the furniture.
  const newFurnitureName = newProps.itemName;
  delete newProps.itemName;
  const newFurniturePropNames = Object.keys(newProps);
  const updatedFurniture = _.clone(currentFurnitureProps);
  newFurniturePropNames.forEach(prop => {
    if (newProps[prop]) {
      updatedFurniture[prop] = newProps[prop]; // Update with the new value
    } else { // User left this field blank (or deleted a value that existed before)
      delete updatedFurniture[prop]; // If the prop existed on the old furniture object, delete it
    }
  });

  // If the furniture name didn't change, then change just update the furniture. If the furniture name
  // did change, then send along the new information with the new furniture name, and delete
  // the old furniture
  const nameChange = originalFurnitureName !== newFurnitureName;
  databaseAPI.updateFurniture(roomName, newFurnitureName, updatedFurniture, nameChange ? originalFurnitureName: '');

  return {
    type: UPDATE_FURNITURE,
    roomName,
    originalFurnitureName,
    newFurnitureName,
    updatedFurniture,
  }
}