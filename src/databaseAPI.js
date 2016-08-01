const database = firebase.database();

export addRoom = function(room) {
  for (var room in rooms) {
    database.ref('rooms/' + room).set(rooms[room]);
  }
};

export getRooms = function(cb) {
  database.ref('rooms').once('value', function(snapshot){
    return snapshot;
  })
};

export getFurniture = function(rooms) {
  for (var room in rooms) {
    database.ref('rooms/' + room + '/furniture').once('value', function(snapshot) {
      return snapshot;
    })
  }
};

export getBudget = function(cb) {
  database.ref('budget').once('value', function(snapshot) {
    return snapshot;
  })
};

export updateBudget = function(budget) {
  database.ref('budget').set(budget);
};

export updateFurniture = function(rooms, furniture) {
  for (var room in rooms) {
    for (var pieceOfFurniture in furniture) {
      database.ref('rooms/' + room + '/furniture/' + pieceOfFurniture).set(furniture[pieceOfFurniture]);
    }
  }
};

export removeRoom = function(room) {
  for (var room in rooms) {
    database.ref('rooms/' + room).remove();
  }
};

export removeFurniture = function(room, furniture) {
  for (var room in rooms) {
    for (var pieceOfFurniture in furniture) {
      database.ref('rooms/' + room + '/furniture/' + pieceOfFurniture).remove();
    }
  }
};