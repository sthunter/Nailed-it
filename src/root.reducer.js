import { combineReducers } from 'redux';
import roomsReducer from './rooms/reducers/rooms.reducer';
import selectRoomReducer from './rooms/reducers/selectRoom.reducer';
import { reducer as formReducer} from 'redux-form';
import budgetReducer from './BudgetView/reducers/BudgetView.reducer';
import publicReducer from './public_view/reducers/project.reducer';
//import publicRoomsReducer from './public_view/reducers/publicRooms.reducer';

const rootReducer = combineReducers({
  rooms: roomsReducer,
  roomSelected: selectRoomReducer,
  form: formReducer,
  budget: budgetReducer,
  projects: publicReducer,
});

export default rootReducer;
