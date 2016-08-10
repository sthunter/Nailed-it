import { expect, $ } from '../testHelper';
import {UPDATE_ROOM_DETAILS, updateRoom, ADD_ROOM, addRoom } from '../../src/rooms/actions/rooms.action.js';

describe ('Update Room', () => {

 //const state = {
 //    roomSelected: 'livingRoom',
 //    rooms: {
 //      livingRoom: {
 //        furniture: {
 //          couch: {
 //            color: 'blue',
 //            price: 200
 //          }
 //        },
 //        colors: ['#45425A', '#575C55', '#6C7D47', '#96A13A', '#ACC12F']
 //      }
 //    }
 //  };
 //const update = {
 //  roomName: 'family room',
 //  photoURL: 'https://www.robesondesign.com/wp-content/gallery/modern-traditional-family-room-ba/Modern-Traditional-Family-Room-1.1-After.jpg',
 //  colors: '#452434, #524C55, #231sed, #96A13A, #ACC12F'
 //}
 //const currentRoom = state.roomSelected;
 //const furniture = state.rooms[currentRoom].furniture;
 // beforeEach(() => {

 // });

 it ('is a function', () => {
   expect(updateRoom).to.be.a('function');
 });

 describe ('that returns', () => {
   let test = updateRoom(currentRoom, furniture, update);

   it('an object', () => {
     expect(test).to.be.a('object');
   });
   it ('that has a property type with value UPDATE_ROOM',()=> {
     expect(test).to.have.property('type', 'UPDATE_ROOM');
   });
   it ('that has a property oldRoom that is a string',()=> {
     expect(test).to.have.property('oldRoom').and.to.be.a('string');
   })
   describe ('that has a property newRoom',()=> {
     it ('that is an object', () => {
       expect(test).to.have.property('newRoom').and.to.be.a('object');
     })
     it ('that has a property roomName that is a string',()=> {
       expect(test.newRoom).to.have.property('roomName').and.to.be.a('string');
     });
     it ('that has a property colors that is a string',()=> {
       expect(test.newRoom).to.have.property('colors').and.to.be.a('string');
     });
     it ('that has a property photoURL that is a string',()=> {
       expect(test.newRoom).to.have.property('photoURL').and.to.be.a('string');
     });
     describe ('that has a property furniture',()=> {
       it ('that is an object', () => {
         expect(test.newRoom).to.have.property('furniture').and.to.be.a('object');
       });
     });
   });
 });
});