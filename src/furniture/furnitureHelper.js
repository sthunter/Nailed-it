const furnitureHelper = {
  listByFurniture(rooms) {
    if (typeof(rooms) === 'object' && !(Array.isArray(rooms))) {
      let unsorted = [];
      for (var room in rooms) {
        if (room) {
          for (var furniture in rooms[room].furniture) {
            if (furniture) {
              let triple = {
                furnitureName: furniture,
                roomName: room,
                furnitureObj: rooms[room].furniture[furniture],
              };
              unsorted.push(triple);
            };
          };
        };
      }
      //data shape is [{furnitureName, roomName, furnitureObj}, ...]
      return unsorted;
    }
    else {
      return null;
    }
  },

  filterByRoom(rooms) {
    if (typeof(rooms) === 'object' && !(Array.isArray(rooms))) {
      let data = furnitureHelper.listByFurniture(rooms);
        
        data.sort((a, b) => {
          let aName = a.roomName.toLowerCase();  
          let bName = b.roomName.toLowerCase();
          if (aName < bName) {
            return -1;
          }
          if (aName > bName) {
            return 1;
          }
          return 0;
        });
      //sorted by room name from a to z.
      //data shape is [[furnitureName, roomName, furnitureObj], ...]
      
      return data || [];
    }
    else {
      return null;
    }
  },
  filterByFurniture(rooms) {
    if (typeof(rooms) === 'object' && !(Array.isArray(rooms))) {
      let data = furnitureHelper.listByFurniture(rooms);
      
        data.sort((a, b) => {
          let aName = a.furnitureName.toLowerCase();
          let bName = b.furnitureName.toLowerCase();
          if (aName < bName) {
            return -1;
          }
          if (aName > bName) {
            return 1;
          }
          return 0;
        });
      //sorted by furniture name from a to z.
      //data shape is [{furnitureName, roomName, furnitureObj}, ...]
      return data || [];
    }
    else {
      return null;
    }
  },
  filterByDate(rooms) {
    if (typeof(rooms) === 'object' && !(Array.isArray(rooms))) {
      let data = furnitureHelper.listByFurniture(rooms);
      
        data.sort((a, b) => {

          if (a.furnitureObj.deliveryDate === undefined || !(a.furnitureObj.deliveryDate)) {
            return 1;
          }
          if (b.furnitureObj.deliveryDate === undefined || !(b.furnitureObj.deliveryDate)) {
            return -1;
          }
          let aDate = Date.UTC(...(a.furnitureObj.deliveryDate.split('-')));
          let bDate = Date.UTC(...(b.furnitureObj.deliveryDate.split('-')));
         
          if (aDate < bDate) {
            return -1;
          }
          if (aDate > bDate) {
            return 1;
          }
          return 0;
        });
      //sorted by delivery date from soonest to latest with items without a delivery date last
      //data shape is [{furnitureName, roomName, furnitureObj}, ...]
      return data || [];
    }
    else {
      return null;
    }
  },
  filterByPrice(rooms) {
    if (typeof(rooms) === 'object' && !(Array.isArray(rooms))) {
      let data = furnitureHelper.listByFurniture(rooms);
      
        data.sort((a, b) => {
          let aPrice = Number(a.furnitureObj.price);
          let bPrice = Number(b.furnitureObj.price);

          if (isNaN(aPrice)) {
            return 1;
          }
          if (aPrice < bPrice) {
            return -1;
          }
          if (aPrice > bPrice) {
            return 1;
          }
          return 0;
        });
      //sorted by furniture price from lowest to highest with items without a price last
      //data shape is [{furnitureName, roomName, furnitureObj}, ...]
      return data || [];
    }
    else {
      return null;
    }
  },

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
      if (room) {
        sum += this.calculateRoomCost(room, rooms)
      };
    };
    return sum;
  },
};
export default furnitureHelper;
