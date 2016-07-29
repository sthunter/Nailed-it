import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './app/App';
import './index.css';
import reducers from './root_reducer';
//import { Provider } from 'react-redux';

const store = createStore(reducers);

function render() {
  ReactDOM.render(
    //<Provider store={store}>
      <App store={store} />,
    //</Provider>,
    document.getElementById('root')
  );
}

render();
store.subscribe(render);
