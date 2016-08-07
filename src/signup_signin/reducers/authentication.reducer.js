import { AUTHENTICATE } from '../actions/signIn.action';

export default function(state = false, action) {
  switch (action.type) {
    case AUTHENTICATE:
      return action.payload;
  }
  return state;
}
