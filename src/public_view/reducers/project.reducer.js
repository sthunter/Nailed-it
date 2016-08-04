import { ADD_PROJECT } from '../actions/public.action';
import _ from 'lodash';

const projectReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      action.project = action.payload.val() || {};
      action.publicProjects = {};
      for (var key in action.project) {
        if (action.project[key].public === true) {
          action.publicProjects[key] = action.project[key];
        }
      }
      return Object.assign(_.cloneDeep(state), action.publicProjects);
    default:
      return state;
  }
};

export default projectReducer;

/*
 deliveryDate
 :
 undefined
 description
 :
 undefined
 itemName
 :
 "aoe"
 price
 :
 "oae"

 url
 :
 undefined
 */
