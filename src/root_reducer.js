import { combineReducers } from 'redux';
import { addFurniture } from './furniture/reducers/add.furniture.reduce';
import roomsReducer from './rooms/reducers/rooms.reducer';
import roomSelectedReducer from './rooms/reducers/roomSelected.reducer';

const rootReducer = combineReducers({
  rooms: roomsReducer,
  roomSelected: roomSelectedReducer
});

export default rootReducer;
