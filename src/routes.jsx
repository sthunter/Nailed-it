import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app/app.component';
import RoomsListContainer from './rooms/containers/roomsList.container.jsx';
import FurnitureListContainer from './furniture/containers/furnitureList.container';
import PublicProjectListContainer from './public_view/containers/publicProjectList.container';
import PublicRoomsListContainer from './public_view/containers/publicRoomsList.container';
import requireAuth from './signup_signin/containers/requireAuthentification.container';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PublicProjectListContainer} />
    <Route path="room" component={RoomsListContainer}></Route>
    <Route path="furniture" component={FurnitureListContainer}></Route>
    <Route path="public" component={PublicProjectListContainer}></Route>
    <Route path="publicRoom" component={PublicRoomsListContainer}></Route>
  </Route>
);
