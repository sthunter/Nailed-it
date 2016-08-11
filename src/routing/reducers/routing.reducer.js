import { ROUTING } from '../actions/routing.action';

export default function(state = "/", action) {
  switch (action.type) {
    case ROUTING:
      return action.payload;
    default:
    return state;
  }
}
