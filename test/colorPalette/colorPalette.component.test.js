import { renderComponent, expect } from '../testHelper';
import ColorPalette from '../../src/colorPalette/components/colorPalette.component';

describe ('ColorPalette', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(ColorPalette);
  });

  it ('exists', () => {
    expect(component).to.contain('Hello World');
  });


} );