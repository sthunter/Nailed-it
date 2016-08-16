const furnitureHelper = {
  //this is no good for the listingFurniture components map function
  // listByRoom(rooms) {
  //   if (typeof(rooms) === 'object' && !(Array.isArray(rooms))) {
  //     let unsorted = [];
  //     for (var room in rooms) {
  //       if (room) {
  //       let triple = [room,[],[]];
  //         for (var furniture in rooms[room].furniture) {
  //           if (furniture) {
  //             triple[1].push(furniture)
  //             triple[2].push(rooms[room].furniture[furniture])
  //           };
  //         };
  //       unsorted.push(triple);
  //       };
  //     }
  //     //data shape is [[roomName, [furnitureName, ...], [furnitureObj, ...]], ...]
  //     return unsorted;
  //   }
  //   else {
  //     return null;
  //   }
  // },
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
          let aPrice = new Number(a.furnitureObj.price);
          let bPrice = new Number(b.furnitureObj.price);

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
  //for now this is not a useful function and doesn't work
  // filterByRoomPrice(rooms) {
  //   if (typeof(rooms) === 'object' && !(Array.isArray(rooms))) {
  //     let data = furnitureHelper.listByRoom(rooms);
      
  //       data.sort((a, b) => {
  //         let aPrice = 0;
  //         let bPrice = 0;
  //         for (var i = 0; i < a[2].length; i ++) {
  //           if (!isNaN(a[2][i].price)) {
  //             aPrice += Number(a[2][i].price);
  //           }
  //         }
  //         for (var i = 0; i < b[2].length; i ++) {
  //           if (!isNaN(b[2][i].price)) {

  //             bPrice += Number(b[2][i].price);
  //           }
  //         }
  //         if (isNaN(aPrice)) {
  //           return 1;
  //         }
  //         if (aPrice < bPrice) {
  //           return -1;
  //         }
  //         if (aPrice > bPrice) {
  //           return 1;
  //         }
  //         return 0;
  //       });
  //     //sorted by total room price from lowest to highest with items without a price last
  //     //data shape is [[roomName, [furnitureName, ...], [furnitureObj, ...]], ...]
      
  //     return data || [];
  //   }
  //   else {
  //     return null;
  //   }
  // },
};
export default furnitureHelper;
