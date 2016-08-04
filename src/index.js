import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import reduxStoreCreator from './reduxStoreCreator';
import './index.css';
import routes from './routes';

ReactDOM.render(
    <Provider store={reduxStoreCreator()}>
      <Router history={browserHistory} routes={routes} />
    </Provider>,
  document.getElementById('root')
);
