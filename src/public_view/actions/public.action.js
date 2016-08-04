import { getProjects } from '../../databaseAPI';

export const ADD_PROJECT = 'ADD_PROJECT';

export function addProjectFromDb() {
  const request = getProjects();
  
  return {
    type: ADD_PROJECT,
    payload: request
  };
}

export const SELECT_PROJECT = 'SELECT_PROJECT';

export function selectProject(projectName) {
  return {
    type: SELECT_PROJECT,
    projectName
  };
}
