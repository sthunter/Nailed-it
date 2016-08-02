// import getBudget from '../../databaseAPI';


export const GET_BUDGET ='GET_BUDGET';
export const UPDATE_BUDGET ='UPDATE_BUDGET';
export function GetBudget(value) {
  // console.log(getBudget);

  const budget = value;
  // return {
  //       type: GET_BUDGET,
  //       budget: budget
  //     };
  // getBudget().then((value) => {
  //   if(value) {
      // const budget = value;
  
    
    return {
      type: GET_BUDGET,
      budget
    };
  
//     }
//   });  
}