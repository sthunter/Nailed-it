export const ADD_PROJECT = 'ADD_PROJECT';

export function addProjectFromDb(room) {
  const projectObj = project;
  room = Object.keys(projectObj)[0];

  const roomWithEmptyFurniture = {};
  roomWithEmptyFurniture[room] = { furniture: {} };
  const newRoom = Object.assign({}, roomWithEmptyFurniture, roomObj);

  return {
    type: ADD_PROJECT,
    project: newProject
  };
}


export const SELECT_ROOM = 'SELECT_PROJECT';
export function selectProject(projectName) {
  return {
    type: SELECT_PROJECT,
    projectName
  };
}

// Todo:
// update room
// removeRoom
