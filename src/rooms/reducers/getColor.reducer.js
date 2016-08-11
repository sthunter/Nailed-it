import { GET_COLOR } from '../actions/rooms.action';

const roomColor = (state = '', action) => {
  switch (action.type) {
    case GET_COLOR:
      return action.color;
    default:
      return state;
  }
};

export default roomColor;
