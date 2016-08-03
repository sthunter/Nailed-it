import { getBudget as getter } from '../../databaseAPI';


export const GET_BUDGET ='GET_BUDGET';
export const UPDATE_BUDGET ='UPDATE_BUDGET';
export function getBudget() {


  const budget = getter();  
  return {
    type: GET_BUDGET,
    payload: budget
  };
}