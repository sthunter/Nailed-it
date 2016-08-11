import { combineReducers } from 'redux';
import roomsReducer from './rooms/reducers/rooms.reducer';
import selectRoomReducer from './rooms/reducers/selectRoom.reducer';
import { reducer as formReducer} from 'redux-form';
import budgetReducer from './BudgetView/reducers/BudgetView.reducer';
import publicReducer from './public_view/reducers/project.reducer';
import shareRooms from './rooms/reducers/shareRooms.reducer';
import authenticationReducer from './signup_signin/reducers/authentication.reducer';
import router from './routing/reducers/routing.reducer';
import roomColor from './rooms/reducers/getColor.reducer';

const rootReducer = combineReducers({
  rooms: roomsReducer,
  roomSelected: selectRoomReducer,
  form: formReducer,
  budget: budgetReducer,
  projects: publicReducer,
  shared: shareRooms,
  authenticated: authenticationReducer,
  route: router
});

export default rootReducer;
