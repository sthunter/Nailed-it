import { ADD_PHOTO } from '../actions/rooms.action';

const addPhoto = (state = {}, action) => {
  switch (action.type) {
    case ADD_PHOTO:
      return action.url;
    default:
      return state;
  }
};

export default addPhoto;
