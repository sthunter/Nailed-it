import { renderComponent, expect, $ } from '../testHelper';
import ColorPalette from '../../src/colorPalette/containers/colorPalette.container';

describe ('ColorPalette', () => {
  let component;
  let props;
  let state = {
      roomSelected: 'livingRoom',
      rooms: {
        livingRoom: {
          furniture: {
            couch: {
              color: 'blue'
            }
          },
          colors: ['#45425A', '#575C55', '#6C7D47', '#96A13A', '#ACC12F'] 
        }
      }
    };
  let currentRoom = state.rooms[state.roomSelected];
  beforeEach(() => {
    // props = { colors: ['#abc', '#fff', '#327'] };
    component = renderComponent(ColorPalette, {}, state);
  });

  it ('has an svg', () => {
    expect(component.find('svg')).to.exist;
  });

  it ('has color swatches equal to the number of colors passed to component', () => {
    
    //this expects one more rect than the ones made by the color mapping because of the container rect that outlines them
    expect(component.find('rect').length).to.equal(currentRoom.colors.length + 1);
  });

  it ('should have swatches with colors matching the passed-in colors', () => {
    currentRoom.colors.forEach((color, i) => {
      const $rect = $(component.find('rect')[i]);
      const foundColor = $rect.attr('fill');
      expect(foundColor).to.equal(color);
    });
  });
} );