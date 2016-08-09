import { expect, deeplyHasKeyOrProp } from '../testHelper.jsx';

describe('testHelper', () => {
  describe('deeplyHasKeyOrProp', () => {
    const searchTarget = {
      budget: 1000,
      designer: 'Mrs. Winchester',
      rooms: {
        'Seance room': {
          furniture: {
            chair: {
              cost: 0,
              primaryColor: 'brown',
            },
          },
          colors: ['blue', 'blue-steel', 'steel'],
        },
        'Dead-end staircase': {
          images: ['http://99percentinvisible.org/app/uploads/2015/04/Winchester_Mystery_House_San_Jose_CA_C31107.jpg'],
        },
      },
      roomSelected: 'Seance room',
    };

    it('should find a single key or value', () => {
      expect(deeplyHasKeyOrProp(1000)).to.be.true;
      expect(deeplyHasKeyOrProp('1000')).to.be.false;
      expect(deeplyHasKeyOrProp('Mrs. Winchester')).to.be.true;
      expect(deeplyHasKeyOrProp('Seance room')).to.be.true;
      expect(deeplyHasKeyOrProp('Ballroom')).to.be.false;
      expect(deeplyHasKeyOrProp('colors')).to.be.true;
      expect(deeplyHasKeyOrProp('blue-steel')).to.be.true;
      expect(deeplyHasKeyOrProp('designer')).to.be.true;
    });

    it('should allow you to specify whether to search only keys or only values', () => {
      expect(deeplyHasKeyOrProp({ values: 1000 })).to.be.true;
      expect(deeplyHasKeyOrProp({ keys: 1000 })).to.be.false;
      expect(deeplyHasKeyOrProp({ values: '1000' })).to.be.false;

      expect(deeplyHasKeyOrProp({ values: 'Mrs. Winchester' })).to.be.true;
      expect(deeplyHasKeyOrProp({ keys: 'Mrs. Winchester' })).to.be.false;

      expect(deeplyHasKeyOrProp({ keys: 'Seance room' })).to.be.true;
      expect(deeplyHasKeyOrProp({ values: 'Seance room' })).to.be.false;

      expect(deeplyHasKeyOrProp({ keys: 'colors' })).to.be.true;
      expect(deeplyHasKeyOrProp({ values: 'colors' })).to.be.false;

      expect(deeplyHasKeyOrProp({ values: 'blue-steel' })).to.be.true;
      expect(deeplyHasKeyOrProp({ keys: 'blue-steel' })).to.be.false;

      expect(deeplyHasKeyOrProp({ keys: 'designer' })).to.be.true;
      expect(deeplyHasKeyOrProp({ values: 'designer' })).to.be.false;
    });

    it('should return whether each of an array of values/keys is found in the object', () => {
      expect(deeplyHasKeyOrProp({ values: [1000, 'Mrs. Winchester', 'blue-steel'] })).to.be.true;
      expect(deeplyHasKeyOrProp({ keys: [1000, 'Mrs. Winchester', 'blue-steel'] })).to.be.false;
      expect(deeplyHasKeyOrProp({ values: [1000, 'Mrs. Winchester', 'red', 'blue-steel'] })).to.be.false;
      expect(deeplyHasKeyOrProp({ values: ['red'] })).to.be.false;

      expect(deeplyHasKeyOrProp({ keys: ['colors', 'designer'] })).to.be.true;
      expect(deeplyHasKeyOrProp({ values: ['colors', 'designer'] })).to.be.false;
      expect(deeplyHasKeyOrProp({ keys: ['colors', 'designer', 'architect'] })).to.be.false;
      expect(deeplyHasKeyOrProp({ keys: ['architect'] })).to.be.false;
    });

    it('should search simultaneously for keys and values', () => {
      expect(deeplyHasKeyOrProp({
        values: [1000, 'Mrs. Winchester', 'blue-steel'],
        keys: ['colors', 'designer'],
      })).to.be.true;

      expect(deeplyHasKeyOrProp({
        keys: [1000, 'Mrs. Winchester', 'blue-steel'],
        values: ['colors', 'designer'],
      })).to.be.true;

      expect(deeplyHasKeyOrProp({
        values: [1000, 'Mrs. Winchester', 'blue-steel', 'magenta'],
        keys: ['colors', 'designer'],
      })).to.be.false;

      expect(deeplyHasKeyOrProp({
        values: [1000, 'Mrs. Winchester', 'blue-steel'],
        keys: ['colors', 'architect', 'designer'],
      })).to.be.false;

      expect(deeplyHasKeyOrProp({
        values: [1000, 'Mrs. Winchester', 'blue-steel'],
        keys: 'colors',
      })).to.be.true;

      expect(deeplyHasKeyOrProp({
        values: 'blue-steel',
        keys: ['colors', 'designer'],
      })).to.be.true;

    });

    it('should return whether all keys/values in an array are found in the object', () => {
      expect(deeplyHasKeyOrProp(['blue', 'budget', 'Mrs. Winchester', 'designer', 1000])).to.be.true;
      expect(deeplyHasKeyOrProp(['blue', 'budget', 'Mrs. Winchester', 'designer', '1000'])).to.be.false;
    });

  });
});