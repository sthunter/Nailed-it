import Firebase from 'firebase';

const config = {
        apiKey: "AIzaSyArc1jthjsWkx91fsY2QTzXVhZm378B9AY",
        authDomain: "nailed-it-c1d80.firebaseapp.com",
        databaseURL: "https://nailed-it-c1d80.firebaseio.com",
        storageBucket: "nailed-it-c1d80.appspot.com",
      };
firebase.initializeApp(config);


const database = Firebase.database();

export function addRoom(room) {
  for (var room in rooms) {
    database.ref('rooms/' + room).set(rooms[room]);
  }
};

export function getRooms(cb) {
  database.ref('rooms').once('value').then((snapshot) => {
    const rooms = snapshot.val();
    
    for (var room in rooms){
      let roomObj = {};
      roomObj[room] = rooms[room]
      cb(roomObj);
    }
    //cb(snapshot.val());
  });
};

export function getFurniture(rooms) {
  for (var room in rooms) {
    database.ref('rooms/' + room + '/furniture').once('value', function(snapshot) {
      return snapshot;
    })
  }
};

export function getBudget() {
  return database.ref('budget').once('value')
  // .then((snapshot) => {
  //   cb(snapshot.val());
  // });
};

export function updateBudget(budget) {
  database.ref('budget').set(budget);
};

export function updateFurniture(rooms, furniture) {
  for (var room in rooms) {
    for (var pieceOfFurniture in furniture) {
      database.ref('rooms/' + room + '/furniture/' + pieceOfFurniture).set(furniture[pieceOfFurniture]);
    }
  }
};

export function removeRoom(room) {
  for (var room in rooms) {
    database.ref('rooms/' + room).remove();
  }
};

export function removeFurniture(room, furniture) {
  for (var room in rooms) {
    for (var pieceOfFurniture in furniture) {
      database.ref('rooms/' + room + '/furniture/' + pieceOfFurniture).remove();
    }
  }
};