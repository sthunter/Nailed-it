import roomsReducer from '../../src/rooms/reducers/rooms.reducer';
import { UPDATE_ROOM_DETAILS, ADD_ROOM } from '../../src/rooms/actions/rooms.action';
import { expect, deeplyHasKeyOrProp } from '../testHelper.jsx';

describe('roomsReducer', () => {
  describe('addRoom', () => {
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
    const newRoomAction = {
      type: ADD_ROOM,
      roomName: 'Orrery Chamber',
      contents: {
        size: '25x15',
        notes: 'Keep an eye on Saturn\'s moons!',
      },
    };
    const newState = roomsReducer(initialState, newRoomAction);

    it('should return initial state when there is no roomName', () => {
      expect(roomsReducer(initialState, { type: ADD_ROOM }))
        .to.equal(initialState);
    });

    it('should add the room to the state', () => {
      expect(newState).to.have.property(newRoomAction.roomName);
    });

    it('should add the size to the state', () => {
      expect(newState).to.have.property(newRoomAction.roomName)
        .which.has.property('size').which.equals(newRoomAction.contents.size);
    });

    it('should add the notes to the state', () => {
      expect(newState).to.have.property(newRoomAction.roomName)
        .which.has.property('notes').which.equals(newRoomAction.contents.notes);
    });

    it('should not mutate the initial state', () => {
      expect(JSON.stringify(initialState), 'The reducer should not mutate the initial state.').to.equal(initialStateStr);
    });
  });

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