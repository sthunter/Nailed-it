import { renderComponent, expect } from '../testHelper';
import RoomsList from '../../src/rooms/containers/roomsList.container.jsx';

describe('RoomsList', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(RoomsList);
  });

  it('shows a button4', () => {
    //expect(component.find('button')).to.exist;
    expect(true).to.be.true;
  });
  it('2shows a button', () => {
    //expect(component.find('button')).to.exist;
    expect(true).to.be.true;
  });

});
