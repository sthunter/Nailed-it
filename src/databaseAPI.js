import Firebase from 'firebase';

const config = {
  apiKey: "AIzaSyArc1jthjsWkx91fsY2QTzXVhZm378B9AY",
  authDomain: "nailed-it-c1d80.firebaseapp.com",
  databaseURL: "https://nailed-it-c1d80.firebaseio.com",
  storageBucket: "nailed-it-c1d80.appspot.com"
};
Firebase.initializeApp(config);

const database = Firebase.database();

export function addRoom(room, roomName) {
  console.log(room, roomName, room[roomName]);
  
  database.ref('Rene/rooms/' + roomName).set({
    furniture : "No furniture"
  });
}


export function getRooms() {
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
};

export function updateBudget(budget) {
  database.ref('Rene/budget').set(budget);
};

export function updateFurniture(roomName, furnitureName, furnitureProps) {
  //take the roomName and furnitureName from the submit and put the obj at the loaction in the database
  database.ref('Rene/rooms/' + roomName + '/furniture/' + furnitureName).set(furnitureProps);
};

export function removeRoom(room) {
  database.ref('Rene/rooms/' + room).remove();
};

// export function removeFurniture(room, furniture) {
//   for (var room in rooms) {
//     for (var pieceOfFurniture in furniture) {
//       database.ref('rooms/' + room + '/furniture/' + pieceOfFurniture).remove();
//     }
//   }
// };
