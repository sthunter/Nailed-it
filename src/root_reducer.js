import { combineReducers } from 'redux';
import roomsReducer from './rooms/reducers/rooms.reducer';
import selectRoomReducer from './rooms/reducers/selectRoom.reducer.js';
import { reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  rooms: roomsReducer,
  roomSelected: selectRoomReducer,
  form: formReducer
});

export default rootReducer;
