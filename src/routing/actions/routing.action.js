export const ROUTING = 'ROUTING';

export function changeRoute(route) {
  return {
    type: ROUTING,
    payload: route
  };
}

export default changeRoute;
