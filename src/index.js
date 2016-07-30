import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './app/App';
import './index.css';
import reducers from './root_reducer';

const store = createStore(reducers);

function render() {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
}

render();
store.subscribe(render);
