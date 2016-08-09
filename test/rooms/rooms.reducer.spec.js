import roomsReducer from '../../src/rooms/reducers/rooms.reducer';
import { UPDATE_ROOM } from '../../src/rooms/actions/rooms.action';
import { expect } from '../testHelper.jsx';

describe('roomsReducer', () => {
  describe('UPDATE_ROOM', () => {
    const initialState = {
      Aviary: {
        furniture: {},
        colors: ['green', 'blue'],
      }
    };
    const actionWithNewProps = {
      type: UPDATE_ROOM,
      oldRoom: 'Aviary',
      newRoom: {
        roomName: 'Aviary',
        photos: ['http://www.aviary.com/beautiful_photo.jpg'],
      },
    };

    it('should return state if there is the action doesn\'t have both' +
      'oldRoom and newRoom properties', () => {
      let action = { type: UPDATE_ROOM };
      let initialStateStr = JSON.stringify(initialState);
      expect(roomsReducer(initialState, action)).to.equal(initialState);
      expect(JSON.stringify(initialState), 'The reducer should not mutate the initial state.').to.equal(initialStateStr);


      action = {
        type: UPDATE_ROOM,
        newRoom: true,
      };
      initialStateStr = JSON.stringify(initialState);
      expect(roomsReducer(initialState, action)).to.equal(initialState);
      expect(JSON.stringify(initialState), 'The reducer should not mutate the initial state.').to.equal(initialStateStr);

      action = {
        type: UPDATE_ROOM,
        oldRoom: true,
      };
      initialStateStr = JSON.stringify(initialState);
      expect(roomsReducer(initialState, action)).to.equal(initialState);
      expect(JSON.stringify(initialState), 'The reducer should not mutate the initial state.').to.equal(initialStateStr);
    });

    xit('should add new properties to an existing room', () => {
      const initialStateStr = JSON.stringify(initialState);
      const newState = roomsReducer(initialState, actionWithNewProps);
      expect(newState).to.have;
      expect(JSON.stringify(initialState), 'The reducer should not mutate the initial state.').to.equal(initialStateStr);
    });

    xit('should overwrite existing properties to an existing room', () => {
      expect(false).to.be.true;
    });

    xit('should not affect existing properties to an existing room ' +
      'if they aren\'t mentioned in the action object', () => {
      expect(false).to.be.true;
    });

    xit('should update the name of a room when the user requests it', () => {
      expect(false).to.be.true;
    });
  });
});