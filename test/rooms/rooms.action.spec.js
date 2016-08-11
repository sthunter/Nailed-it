import { expect, $ } from '../testHelper';
import {UPDATE_ROOM_DETAILS, updateRoomDetails, ADD_ROOM, addRoom } from '../../src/rooms/actions/rooms.action.js';
import _ from 'lodash';

const IGNORE_DB_CALL = true;

describe('Update Room Details', () => {
  const state = {
    roomSelected: 'livingRoom',
    rooms: {
      livingRoom: {
        size: '15x20',
        furniture: {
          couch: {
            color: 'blue',
            price: 200
          }
        },
        //colors: ['#45425A', '#575C55', '#6C7D47', '#96A13A', '#ACC12F']
      }
    }
  };
  const currentRoom = state.roomSelected;

  it('is a function', () => {
    expect(updateRoomDetails).to.be.a('function');
  });

  describe('Action object returned by updateRoomDetails', () => {
    const formDetails = {
      roomName: 'Living room',
      size: '30x20',
      notes: 'Let\'s play some Dominion in the living room!',
    };
    const clonedFormDetails = _.cloneDeep(formDetails);
    const actionObj = updateRoomDetails(currentRoom, state.rooms[currentRoom], formDetails, IGNORE_DB_CALL);

    it('should be an object', () => {
      expect(actionObj).to.be.an('object');
    });

    describe('Action object returned by the action function', () => {
      it ('has a property `type` with value UPDATE_ROOM_DETAILS',()=> {
        expect(actionObj).to.have.property('type', UPDATE_ROOM_DETAILS);
      });

      it('has a property `oldRoomName` that is the correct value', ()=> {
        expect(actionObj).to.have.property('oldRoomName').to.equal(state.roomSelected);
      });

      it('has a property `newRoomName` that is the requested new room name', () => {
        expect(actionObj).to.have.property('newRoomName').to.equal(clonedFormDetails.roomName);
      });

      it('has a property `contents` that is an object', () => {
        expect(actionObj).to.have.property('contents').and.to.be.an('object');
      });

      describe('`contents` object of action object', () => {
        it ('has a property `size` with the correct value',()=> {
          expect(actionObj.contents).to.have.property('size').that.equals(clonedFormDetails.size);
        });

        it ('has a property `notes` with the correct value',()=> {
          expect(actionObj.contents).to.have.property('notes').that.equals(clonedFormDetails.notes);
        });
      });
    });
  });
});

describe('Add Room', () => {
  it('should return an object', () => {
    expect(addRoom(null, IGNORE_DB_CALL)).to.be.an('object');
  });

  describe('the object returned by the addRoom function', () => {
    const roomFormDetails = {
      roomName: 'Great Hall',
      size: '45x45',
      notes: 'This room needs more color.'
    };
    const actionObj = addRoom(roomFormDetails, IGNORE_DB_CALL);

    it('should have a `type` of ADD_ROOM', () => {
      expect(actionObj).to.have.property('type').which.equals(ADD_ROOM);
    });

    it('should include the name of the added room', () => {
      expect(actionObj).to.have.property('roomName').which.equals(roomFormDetails.roomName);
    });

    it('should include the size of the added room', () => {
      expect(actionObj).to.have.property('contents')
        .which.has.property('size')
        .which.equals(roomFormDetails.size);
    });

    it('should include the notes of the added room', () => {
      expect(actionObj).to.have.property('contents')
        .which.has.property('notes')
        .which.equals(roomFormDetails.notes);
    });
  });
});