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
      expect(deeplyHasKeyOrProp(searchTarget, 1000)).to.be.true;
      expect(deeplyHasKeyOrProp(searchTarget, '1000')).to.be.false;
      expect(deeplyHasKeyOrProp(searchTarget, 'Mrs. Winchester')).to.be.true;
      expect(deeplyHasKeyOrProp(searchTarget, 'Seance room')).to.be.true;
      expect(deeplyHasKeyOrProp(searchTarget, 'Ballroom')).to.be.false;
      expect(deeplyHasKeyOrProp(searchTarget, 'colors')).to.be.true;
      expect(deeplyHasKeyOrProp(searchTarget, 'blue-steel')).to.be.true;
      expect(deeplyHasKeyOrProp(searchTarget, 'designer')).to.be.true;
    });

    it('should return whether all keys/values in an array are found in the object', () => {
      expect(deeplyHasKeyOrProp(searchTarget, ['blue', 'budget', 'Mrs. Winchester', 'designer', 1000])).to.be.true;
      expect(deeplyHasKeyOrProp(searchTarget, ['blue', 'budget', 'Mrs. Winchester', 'designer', '1000'])).to.be.false;
    });

  });
});