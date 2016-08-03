import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app/app.component';
import RoomsListContainer from './rooms/containers/roomsList.container';
import FurnitureListContainer from './furniture/containers/furnitureList.container';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={RoomsListContainer} />
    <Route path="room" component={RoomsListContainer}>
    </Route>
    <Route path="furniture" component={FurnitureListContainer}></Route>
  </Route>
);
