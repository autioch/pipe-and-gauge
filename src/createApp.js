const React = require('react');
const { render } = require('react-dom');
const createStore = require('./createStore');

/**
 * Creates store from passed definition, then wires it with an react app and element to mount the app.
 * The View will not be automatically rendered - an action must be called on the store to start.
 * @param  {Object} actions      Functions available on the store for manipulation of the state.
 * @param  {Object} initialState Starting state for the store.
 * @param  {Class} View          React component that will be bound to store, receiving `state` and `store` properties.
 * @param  {HTMLElement} el      Element in which app will be rendered.
 * @return {Object}              Created store. Can have listeners attached, actions called.
 */
module.exports = function createApp(actions, initialState, View, el) {
  const store = createStore(actions, initialState);

  store.subscribe(({ state }) => render(<View state={state} store={store}/>, el));

  return store;
};
