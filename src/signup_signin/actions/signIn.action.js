export const AUTHENTICATE = 'AUTHENTICATE';

export function authenticate(isLoggedIn) {
  return {
    type: AUTHENTICATE,
    payload: isLoggedIn
  };
}

export const LOGOUT = 'LOGOUT';
export function logOut() {
  return {
    type: LOGOUT,
  };
}

export default authenticate;
