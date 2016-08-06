export const AUTHENTICATE = 'AUTHENTICATE';

export function authenticate(isLoggedIn) {
  return {
    type: AUTHENTICATE,
    payload: isLoggedIn
  };
}

export default authenticate;
