import Firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyArc1jthjsWkx91fsY2QTzXVhZm378B9AY',
    authDomain: 'nailed-it-c1d80.firebaseapp.com',
    databaseURL: 'https://nailed-it-c1d80.firebaseio.com',
    storageBucket: 'nailed-it-c1d80.appspot.com',
  };
try {
  Firebase.initializeApp(config);
} catch (e) {
  console.log('[databaseAPI.js] Caught error: Firebase already initialized.');
}
const database = Firebase.database();

// Firebase.storage is undefined when this file is run by tests, so
// we only call Firebase.storage as a function if it's truthy.
var storageRef = Firebase.storage && Firebase.storage().ref();
var metadata = {
  contentType: 'image/jpeg',
};


const databaseAPI = {
  toggleProjectPrivacy(newPublicStatus) {
    database.ref('iGEKbLdXzHORTksYSB21JSd8cqA3/public').set(newPublicStatus);
  },

  uploadPhoto(file) {
    // Per the comment on the assignment of storageRef, if this code is run by our tests,
    // then Firebase.storage is undefined
    if(storageRef) {
      return storageRef.child('images/' + file[0].name).put(file[0], metadata);
    }
  },

  updatePhotoURL(url, selectedRoom) {
    database.ref('iGEKbLdXzHORTksYSB21JSd8cqA3/rooms/' + selectedRoom + '/photoURL').set(url);
  },

  addRoom(room, roomName) {
    database.ref('iGEKbLdXzHORTksYSB21JSd8cqA3/rooms/' + roomName).set(room);
  },

  getRooms() {
    return database.ref('iGEKbLdXzHORTksYSB21JSd8cqA3/rooms').once('value')
      .then((snapshot) => {
        let result = snapshot.val();
        for (var room in result) {
          if(result.hasOwnProperty(room)) {
            if (result[room].colors) {
              result[room].colors = result[room].colors.split(";")
            }
          }
        }
        return {val:() => result};
      });
  },

  getProjects() {
    return database.ref().once('value');
  },

  // getFurniture(rooms) {
  //   for (var room in rooms) {
  //     database.ref('rooms/' + room + '/furniture').once('value', function(snapshot) {
  //       return snapshot;
  //     })
  //   }
  // };

  getBudget() {
    return database.ref('iGEKbLdXzHORTksYSB21JSd8cqA3/budget').once('value');
  },

  updateBudget(budget) {
    database.ref('iGEKbLdXzHORTksYSB21JSd8cqA3/budget').set(budget);
  },

  updateFurniture(roomName, furnitureName, furnitureProps) {
    //take the roomName and furnitureName from the submit and put the obj at the
    // location in the database
    database.ref('iGEKbLdXzHORTksYSB21JSd8cqA3/rooms/' + roomName + '/furniture/' + furnitureName).set(furnitureProps);
  },

  updateRoom(oldRoomName, newRoomName, clonedRoom) {
    return database.ref('iGEKbLdXzHORTksYSB21JSd8cqA3/rooms/' + newRoomName).set(clonedRoom).then((snapshot) => {
      database.ref('iGEKbLdXzHORTksYSB21JSd8cqA3/rooms/' + oldRoomName).remove();
    });
  },
  updateRoomColor(color, roomSelected) {
    database.ref('iGEKbLdXzHORTksYSB21JSd8cqA3/rooms/' + roomSelected + '/color').set(color);
  },

  removeRoom(room) {
    database.ref('iGEKbLdXzHORTksYSB21JSd8cqA3/rooms/' + room).remove();
  },

  // removeFurniture(room, furniture) {
  //   for (var room in rooms) {
  //     for (var pieceOfFurniture in furniture) {
  //       database.ref('rooms/' + room + '/furniture/' + pieceOfFurniture).remove();
  //     }
  //   }
  // };
};

export default databaseAPI;
