import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './app/App';
import './index.css';

const store = createStore(App);

function render() {
  ReactDOM.render(
    <App state={store.getState()} />,
    document.getElementById('root')
  );
}

render();
store.subscribe(render);
