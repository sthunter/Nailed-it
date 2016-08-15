const furnitureHelper = {
  listByRoom(rooms) {
    if (typeof(rooms) === 'object' && !(Array.isArray(rooms))) {
      let unsorted = [];
      for (var room in rooms) {
        if (room) {
        let triple = [room,[],[]];
          for (var furniture in rooms[room].furniture) {
            if (furniture) {
              triple[1].push(furniture)
              triple[2].push(rooms[room].furniture[furniture])
            };
          };
        unsorted.push(triple);
        };
      }
      return unsorted;
    }
    else {
      return null;
    }
  },
  listByFurniture(rooms) {
    if (typeof(rooms) === 'object' && !(Array.isArray(rooms))) {
      let unsorted = [];
      for (var room in rooms) {
        if (room) {
        
          for (var furniture in rooms[room].furniture) {
            if (furniture) {
              let triple = [];
              triple.push(furniture)
              triple.push(room)
              triple.push(rooms[room].furniture[furniture])
              unsorted.push(triple);
            };
          };
        
        };
      }
      return unsorted;
    }
    else {
      return null;
    }
  },

  filterByRoom(rooms) {
    if (typeof(rooms) === 'object' && !(Array.isArray(rooms))) {
      let data = furnitureHelper.listByRoom(rooms);
      
        data.sort((a, b) => {
          if (a[0] < b[0]) {
            return -1;
          }
          if (a[0] > b[0]) {
            return 1;
          }
          return 0;
        });
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
          if (a[0] < b[0]) {
            return -1;
          }
          if (a[0] > b[0]) {
            return 1;
          }
          return 0;
        });
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

          if (a[2].deliveryDate === undefined || !(a[2].deliveryDate)) {
            return 1;
          }
          if (b[2].deliveryDate === undefined || !(b[2].deliveryDate)) {
            return -1;
          }
          let aDate = Date.UTC(...(a[2].deliveryDate.split('-')));
          let bDate = Date.UTC(...(b[2].deliveryDate.split('-')));
         
          if (aDate < bDate) {
            return -1;
          }
          if (aDate > bDate) {
            return 1;
          }
          return 0;
        });
    }
    else {
      return null;
    }
  },
  filterByPrice(rooms) {
    if (typeof(rooms) === 'object' && !(Array.isArray(rooms))) {
      let data = furnitureHelper.listByFurniture(rooms);
      
        data.sort((a, b) => {
          let aPrice = new Number(a[2].price);
          let bPrice = new Number(b[2].price);

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
        
      return data || [];
    }
    else {
      return null;
    }
  }
};
export default furnitureHelper;