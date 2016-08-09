import { getBudget as getter, updateBudget as updater } from '../../databaseAPI';
import { getGraphData } from './graphData';

export const GET_BUDGET ='GET_BUDGET';
export function getBudget() {
  let budget = getter(); 
  return {
    type: GET_BUDGET,
    payload: budget
  };
}

export const UPDATE_BUDGET ='UPDATE_BUDGET';
export function updateBudget(budgetObj) {
  console.log(budgetObj);
  let budget = updater(budgetObj.newBudget);
  return {
    type: UPDATE_BUDGET,
    payload: budget,
    newBudget: budgetObj.newBudget
  };
}

export const UPDATE_GRAPH = 'UPDATE_GRAPH';
export function updateGraph(roomBudget) {
  let selectedRoom = getGraphData(roomBudget);
  return {
    type: UPDATE_GRAPH,
    payload: selectedRoom
  }
}