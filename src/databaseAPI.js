import Firebase from 'firebase';

const config = {
  apiKey: "AIzaSyArc1jthjsWkx91fsY2QTzXVhZm378B9AY",
  authDomain: "nailed-it-c1d80.firebaseapp.com",
  databaseURL: "https://nailed-it-c1d80.firebaseio.com",
  storageBucket: "nailed-it-c1d80.appspot.com"
};
Firebase.initializeApp(config);

const database = Firebase.database();

// export function addRoom(room) {
//   for (var room in rooms) {
//     database.ref('rooms/' + room).set(rooms[room]);
//   }
// }


export function getRooms(cb) {
  return database.ref('Rene/rooms').once('value')
};

export function getProjects() {
  return database.ref().once('value')
};
// export function getFurniture(rooms) {
//   for (var room in rooms) {
//     database.ref('rooms/' + room + '/furniture').once('value', function(snapshot) {
//       return snapshot;
//     })
//   }
// };

export function getBudget() {
  return database.ref('Rene/budget').once('value')
    // .then((snapshot) => {
    //   cb(snapshot.val());
    // });
};

export function updateBudget(budget) {
  database.ref('Rene/budget').set(budget);
};

// export function updateFurniture(rooms, furniture) {
//   for (var room in rooms) {
//     for (var pieceOfFurniture in furniture) {
//       database.ref('rooms/' + room + '/furniture/' + pieceOfFurniture).set(furniture[pieceOfFurniture]);
//     }
//   }
// };

// export function removeRoom(room) {
//   for (var room in rooms) {
//     database.ref('rooms/' + room).remove();
//   }
// };

// export function removeFurniture(room, furniture) {
//   for (var room in rooms) {
//     for (var pieceOfFurniture in furniture) {
//       database.ref('rooms/' + room + '/furniture/' + pieceOfFurniture).remove();
//     }
//   }
// };
