import { MAKE_PUBLIC_PRIVATE } from '../actions/rooms.action';

const shareRooms = (state = false, action) => {
  switch (action.type) {
    case MAKE_PUBLIC_PRIVATE:
      return !action.shared;
    default:
      return state;
  }
};

export default shareRooms;
