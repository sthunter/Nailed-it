import { combineReducers } from 'redux';
// import { addFurniture } from './furniture/reducers/add.furniture.reduce';
import roomsReducer from './rooms/reducers/rooms.reducer';
import selectRoomReducer from './rooms/reducers/selectRoom.reducer.js';

const rootReducer = combineReducers({
  rooms: roomsReducer,
  roomSelected: selectRoomReducer
});

export default rootReducer;
