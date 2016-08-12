import { expect } from '../testHelper.jsx';
import { LOGOUT } from '../../src/signup_signin/actions/signIn.action';
import authentication from '../../src/signup_signin/reducers/authentication.reducer';

describe('authentication reducer', () => {
  it('should return the state if an action without a type is passed', () => {
    const initialState = {};
    expect(authentication(initialState, {})).to.equal(initialState);
  });

  describe('SIGNOUT', () => {
    it('should set the authenticated property of state to false', () => {
      const initialState = true;
      const logOutAction = {
        type: LOGOUT,
      };
      expect(authentication(initialState, logOutAction)).to.be.false;
    });
  });

});