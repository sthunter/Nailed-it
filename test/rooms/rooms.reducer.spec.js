import roomsReducer from '../../src/rooms/reducers/rooms.reducer';
import { UPDATE_ROOM_NAME } from '../../src/rooms/actions/rooms.action';
import { expect, deeplyHasKeyOrProp } from '../testHelper.jsx';

describe('roomsReducer', () => {
  describe(UPDATE_ROOM_NAME, () => {
    const initialState = {
      Aviary: {
        furniture: {},
        colors: ['green', 'blue'],
      },
      Bathroom: {
        furniture: {},
        photos: [],
      },
    };
    const initialStateStr = JSON.stringify(initialState);

    const actionWithNameChange = {
      type: UPDATE_ROOM_NAME,
      oldRoom: 'Aviary',
      newRoom: 'Apiary'
    };

    it('should return state if there is the action doesn\'t have both' +
      'oldRoom and newRoom properties', () => {
      let action = { type: UPDATE_ROOM_NAME };
      expect(roomsReducer(initialState, action)).to.equal(initialState);
      expect(JSON.stringify(initialState), 'The reducer should not mutate the initial state.').to.equal(initialStateStr);

      action = {
        type: UPDATE_ROOM_NAME,
        newRoom: true,
      };
      expect(roomsReducer(initialState, action)).to.equal(initialState);
      expect(JSON.stringify(initialState), 'The reducer should not mutate the initial state.').to.equal(initialStateStr);

      action = {
        type: UPDATE_ROOM_NAME,
        oldRoom: true,
      };
      expect(roomsReducer(initialState, action)).to.equal(initialState);
      expect(JSON.stringify(initialState), 'The reducer should not mutate the initial state.').to.equal(initialStateStr);
    });

    it('should update the name of the room, and nothing else', () => {
      const newState = roomsReducer(initialState, actionWithNameChange);
      const newStateStr = JSON.stringify(newState);
      expect(deeplyHasKeyOrProp(newState, [
        'Apiary', 'furniture', 'colors', 'green', 'blue', 'Bathroom',
      ])).to.be.true;
      expect(deeplyHasKeyOrProp(newState, ['Aviary'])).to.be.false;
      expect(initialStateStr.replace('Aviary', 'Apiary').length).to.equal(newStateStr.length);

      expect(JSON.stringify(initialState), 'The reducer should not mutate the initial state.').to.equal(initialStateStr);
    });

  });
});