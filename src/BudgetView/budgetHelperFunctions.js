const helpers = {

  calculateBudget(roomName, rooms) {
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


  toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  },

  generateData(rooms, budget) {
    
    let arr = []
    let totalCost = 0;
    
    const roomsList = Object.keys(rooms);
    const calculateBudget = this.calculateBudget;
    const getRandomColor = this.getRandomColor;
    const toTitleCase = this.toTitleCase;

    roomsList.forEach(function(room){
      let calc = calculateBudget(room, rooms);
      
      var obj = {};
      obj["key"] = calc > 0 ? toTitleCase(room) : ' ';
      obj["value"] = calc;
      obj["color"] = rooms[room].color.hex || '#424242';
      arr.push(obj)
      totalCost += calc;
    });
    
    let remainingBudget = budget - totalCost;
    
    let costObj = {};
    costObj["key"] = remainingBudget >= 0 ? "Remaining Budget" : "";
    costObj["value"] = remainingBudget > 0 ? remainingBudget : 0;
    costObj["color"] = "#424242";
    arr.push(costObj);

    return arr;
  },

  getRandomColor() {
    var letters = '0123456789abcdef';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}

export default helpers;