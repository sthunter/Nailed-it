import _$ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
import reduxStoreCreator from '../src/reduxStoreCreator';

// Set up testing environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
const $ = _$(window);

// Set up chai-jquery
chaiJquery(chai, chai.util, $);

// build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance =  TestUtils.renderIntoDocument(
    <Provider store={reduxStoreCreator('test', state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

// Build helper for simulating events
$.fn.simulate = function (eventName, value) {
  if (value) {
    this.val(value);
  }

  TestUtils.Simulate[eventName](this[0]);
};

// Helper function that searches recursively for properties and/or values
function deeplyHasKeyOrProp(obj, params) {
  if (Array.isArray(params)) {
    return params.every(param => deeplyHasKeyOrProp(obj, param));
  } else if (typeof params === 'object') {
    // Todo
  } else { // else params should be a primitive value

  }
}

// Exports
export {renderComponent, expect, $, deeplyHasKeyOrProp};
