import { expect } from '../testHelper.jsx';
import { logOut, LOGOUT } from '../../src/signup_signin/actions/signIn.action';

describe('logOut', () => {
  it('should return an object with a LOGOUT type', () => {
    expect(logOut()).to.be.an('object').with.property('type').which.equals(LOGOUT);
  });

  //xit('should ', () => {
  //  expect(false).to.be.true;
  //});

});