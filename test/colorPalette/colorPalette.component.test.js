import { renderComponent, expect, $ } from '../testHelper';
import ColorPalette from '../../src/colorPalette/components/colorPalette.component';

describe ('ColorPalette', () => {
  let component;
  let props;
  beforeEach(() => {
    props = { colors: ['#abc', '#fff', '#327'] };
    component = renderComponent(ColorPalette, props);
  });

  it('is visible', () => {
    expect(component).to.be.visible;
  });

  it ('has an svg', () => {
    expect(component.find('svg')).to.exist;
  });

  it ('has color swatches equal to the number of colors passed to component', () => {
    expect(component.find('rect').length).to.equal(props.colors.length);
  });

  it ('should have swatches with colors matching the passed-in colors', () => {
    props.colors.forEach((color, i) => {
      const $rect = $(component.find('rect')[i]);
      const foundColor = $rect.attr('fill');
      expect(foundColor).to.equal(color);
    });
  });
} );