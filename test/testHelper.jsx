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
  // IDENTIFYING VARIOUS FORMS OF `params` PAREMETER -----------------------------------
  // If params is an array, make sure each one of them individually passes
  if (Array.isArray(params)) { // e.g. ['blue', 'budget']
    return params.every(param => deeplyHasKeyOrProp(obj, param));
  }

  // IDENTIFYING VARIOUS FORMS OF `obj` (TARGET OBJECT) PAREMETER ----------------------
  // If obj is an array, return true if any of the array's members have the param
  if (Array.isArray(obj)) {
    return obj.some(subObj => deeplyHasKeyOrProp(subObj, params))
  }

  // If obj isn't an object, we assume it's a primitive, and test whether it matches
  // the param. We'll only test this against values in the params.
  if (typeof obj !== 'object') {
    return obj === params;
  }

  // If we're executing here, then obj is a non-Array object; iterate through its keys.
  const objKeys = Object.keys(obj);
  return objKeys.some(key => {
    if (key === params) {
      return true;
    }
    return deeplyHasKeyOrProp(obj[key], params);
  });
}

// Exports
export {renderComponent, expect, $, deeplyHasKeyOrProp};
