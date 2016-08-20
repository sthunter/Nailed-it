function calculateRoomCost(roomName, rooms) {
  // Convenience variables for an object containing all furniture, and array of all furniture names
  const allFurniture = rooms[roomName].furniture;
  const furnitureNames = (typeof allFurniture === 'object') ? Object.keys(allFurniture) : [];

  // Iterate through furniture names, and sum the costs of each, ignoring any with invalid prices
  // such as 'literally priceless'.
  return furnitureNames.reduce(
    (sum, furnitureName) => {
      const singleFurniture = allFurniture[furnitureName];
      return isNaN(Number(singleFurniture.price)) ?
        sum :
        sum + Number(singleFurniture.price);
    }, 0);
}

function calculateTotalCost(rooms) {
  // Iterate through each room, and return the sum of the cost of each room
  const roomNames = Object.keys(rooms);
  return roomNames.reduce(
    (sum, roomName) => sum + calculateRoomCost(roomName, rooms),
    0);
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function generateData(rooms, budget) {
  const totalCost = calculateTotalCost(rooms);
  const roomsList = Object.keys(rooms);
  const remainingBudget = budget - totalCost;

  // Generate array of objects for each room that has nonzero cost
  const budgetGraphObjects = roomsList.reduce((arr, room) => {
    const roomCost = calculateRoomCost(room, rooms);
    return (roomCost <= 0) ? arr :
      [...arr, {
        key: toTitleCase(room),
        value: roomCost,
        color: rooms[room].color ? rooms[room].color.hex : '#424242',
      }]
  }, []);

  // Create object representing the remaining budget in the project
  if (remainingBudget > 0) {
    const costObj = {
      key: remainingBudget >= 0 ? "Remaining Budget" : "",
      value: remainingBudget > 0 ? remainingBudget : 0,
      color: "#e0e0e0",
    };
    budgetGraphObjects.push(costObj);
  }

  return budgetGraphObjects;
}

export default {
  calculateRoomCost,
  calculateTotalCost,
  toTitleCase,
  generateData,
};
