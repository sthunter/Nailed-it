import roomsReducer from '../../src/rooms/reducers/rooms.reducer';
import { UPDATE_ROOM_DETAILS } from '../../src/rooms/actions/rooms.action';
import { expect, deeplyHasKeyOrProp } from '../testHelper.jsx';

describe('roomsReducer', () => {
  describe(UPDATE_ROOM_DETAILS, () => {
    const initialState = {
      Aviary: {
        furniture: {},
        colors: ['green', 'blue'],
        size: '14x20',
        notes: 'Birds fly around in here',
      },
      Bathroom: {
        furniture: {},
        photos: [],
      },
    };
    const initialStateStr = JSON.stringify(initialState);

    it('should return state if there is the action doesn\'t have oldRoomName or contents properties', () => {
      let action = { type: UPDATE_ROOM_DETAILS };
      expect(roomsReducer(initialState, action)).to.equal(initialState);
      expect(JSON.stringify(initialState), 'The reducer should not mutate the initial state.').to.equal(initialStateStr);

      action = {
        type: UPDATE_ROOM_DETAILS,
        contents: {},
      };
      expect(roomsReducer(initialState, action)).to.equal(initialState);
      expect(JSON.stringify(initialState), 'The reducer should not mutate the initial state.').to.equal(initialStateStr);

      action = {
        type: UPDATE_ROOM_DETAILS,
        oldRoomName: 'Aviary',
      };
      expect(roomsReducer(initialState, action)).to.equal(initialState);
      expect(JSON.stringify(initialState), 'The reducer should not mutate the initial state.').to.equal(initialStateStr);
    });

    it('should return state if the oldRoomName property references a nonexistent room', () => {
      let action = { type: UPDATE_ROOM_DETAILS, oldRoomName: 'Planetarium'};

      expect(roomsReducer(initialState, action)).to.equal(initialState);
    });

    it('should update properties of the room', () => {
      const actionWithPropUpdates = {
        type: UPDATE_ROOM_DETAILS,
        oldRoomName: 'Aviary',
        contents: {
          size: '30x30',
          notes: 'Birds fly around in here, and flightless birds walk around in here'
        },
      };

      const newState = roomsReducer(initialState, actionWithPropUpdates);
      expect(deeplyHasKeyOrProp(newState, ['30x30', 'Birds fly around in here, and flightless birds walk around in here']), 'New properties should be found on the new state').to.be.true;
      expect(deeplyHasKeyOrProp(newState, '14x20'), 'Old properties should not be found on the new state').to.be.false;
      expect(deeplyHasKeyOrProp(newState, 'Birds fly around in here'), 'Old properties should not be found on the new state').to.be.false;

      expect(JSON.stringify(initialState), 'The reducer should not mutate the initial state.').to.equal(initialStateStr);
    });

    it('should update the name of the room along with other properties', () => {
      const actionWithPropUpdates = {
        type: UPDATE_ROOM_DETAILS,
        oldRoomName: 'Aviary',
        newRoomName: 'Apiary',
        contents: {
          size: '30x30',
          notes: 'Birds fly around in here, and flightless birds walk around in here'
        },
      };

      const newState = roomsReducer(initialState, actionWithPropUpdates);
      expect(deeplyHasKeyOrProp(newState, ['Apiary', '30x30', 'Birds fly around in here, and flightless birds walk around in here']), 'New properties should be found on the new state').to.be.true;
      expect(deeplyHasKeyOrProp(newState, 'Aviary'), 'Old properties should not be found on the new state').to.be.false;
      expect(deeplyHasKeyOrProp(newState, '14x20'), 'Old properties should not be found on the new state').to.be.false;
      expect(deeplyHasKeyOrProp(newState, 'Birds fly around in here'), 'Old properties should not be found on the new state').to.be.false;

      expect(JSON.stringify(initialState), 'The reducer should not mutate the initial state.').to.equal(initialStateStr);
    });

  });
});