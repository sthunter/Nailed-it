import { ADD_PHOTO } from '../actions/rooms.action';

const addPhoto = (state = {}, action) => {
  console.log(action.payload)
  switch (action.type) {
    case ADD_PHOTO:
      return action.payload;
    default:
      return state;
  }
};

export default addPhoto;
