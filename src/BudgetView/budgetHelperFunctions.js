const helpers = {

  calculateRoomCost(roomName, rooms) {
    let sum = 0;

    if(rooms[roomName]) {
      let list = rooms[roomName].furniture;
      if(typeof(list) === 'object') {
        for(var key in list) {
          if(key){
            sum += Number(list[key].price);
          }
        }
      }
    }
    return sum;
  },

  calculateTotalCost(rooms) {
  let sum = 0;
  for(var room in rooms) {
    sum += this.calculateRoomCost(room, rooms)
  }
  return sum;
  },


  toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  },

  generateData(rooms, budget) {
    
    let arr = []
    let totalCost = this.calculateTotalCost(rooms);
    
    const roomsList = Object.keys(rooms);
    const calculateRoomCost = this.calculateRoomCost;
    // const getRandomColor = this.getRandomColor;
    const toTitleCase = this.toTitleCase;

    roomsList.forEach(function(room){
      let roomCost = calculateRoomCost(room, rooms);
      if (roomCost > 0) {
        var obj = {};
        obj["key"] = toTitleCase(room);
        obj["value"] = roomCost;
        obj["color"] = rooms[room].color ? rooms[room].color.hex : '#424242';
        arr.push(obj)
      };
    });
    
    let remainingBudget = budget - totalCost;
    
    let costObj = {};
    costObj["key"] = remainingBudget >= 0 ? "Remaining Budget" : "";
    costObj["value"] = remainingBudget > 0 ? remainingBudget : 0;
    costObj["color"] = "#424242";
    arr.push(costObj);

    return arr;
  },


}

export default helpers;
