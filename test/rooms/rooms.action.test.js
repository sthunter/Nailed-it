import { expect, $ } from '../testHelper';
import {UPDATE_ROOM_DETAILS, updateRoomDetails, ADD_ROOM, addRoom } from '../../src/rooms/actions/rooms.action.js';

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
        colors: ['#45425A', '#575C55', '#6C7D47', '#96A13A', '#ACC12F']
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
    const actionObj = updateRoomDetails(currentRoom, state.rooms[currentRoom], formDetails);

    it('should be an object', () => {
      expect(actionObj).to.be.an('object');
    });

    describe('Action object returned by the action function', () => {
      it ('has a property `type` with value UPDATE_ROOM_DETAILS',()=> {
        expect(actionObj).to.have.property('type', UPDATE_ROOM_DETAILS);
      });

      it('has a property `oldRoomName` that is a string', ()=> {
        expect(actionObj).to.have.property('oldRoomName').and.to.be.a('string');
      });

      it('has a property `newRoomName` that is the requested new room name', () => {
        expect(actionObj).to.have.property('newRoomName').to.equal(formDetails.roomName);
      });

      it('has a property `contents` that is an object', () => {
        expect(actionObj).to.have.property('contents').and.to.be.an('object');
      });

      describe('`contents` object of action object', () => {
        it ('has a property `size` with the correct value',()=> {
          expect(actionObj.contents).to.have.property('size').that.equals(formDetails.size);
        });

        it ('has a property `notes` with the correct value',()=> {
          expect(actionObj.contents).to.have.property('notes').that.equals(formDetails.notes);
        });
      });
    });
  });
});