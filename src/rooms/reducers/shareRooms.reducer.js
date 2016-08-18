// NOTE: THIS ISN'T CURRENTLY USED ANYWHERE. INSTEAD, THE REDUCER
// FOR TOGGLING A PROJECT'S PRIVATE STATUS IS IN THE
// project.reducer.js FILE.

import { MAKE_PUBLIC_PRIVATE, GET_PUBLIC_STATUS } from '../actions/rooms.action';

const shareRooms = (state = false, action) => {
  switch (action.type) {
    case GET_PUBLIC_STATUS:
      return action.payload.val();
    case MAKE_PUBLIC_PRIVATE:
      return action.newPublicStatus;
    default:
      return state;
  }
};

export default shareRooms;
