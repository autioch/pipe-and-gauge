const merge = require('./merge');
const { clone } = require('./utils');
const createEmitter = require('./createEmitter');

/**
 * Creates object containing the state and wired actions.
 * @param  {Object} actions           Dictionary of actions that will be bound (wired) to the store.
 * @param  {Object} [initialState={}] Starting state of the store.
 * @return {Object}                   Store, frozen.
 */
module.exports = function createStore(actions, initialState = {}) {
  const state = clone(initialState);
  const store = {};
  const { subscribe, notify } = createEmitter(store);

  store.subscribe = subscribe;
  store.getState = () => state;

  const wireAction = (action) => (data) => {
    const change = action({
      state,
      data,
      store
    });

    merge(state, change);
    notify();

    return store;
  };

  Object.entries(actions).forEach(([actionName, action]) => {
    store[actionName] = wireAction(action);
  });

  return Object.freeze(store);
};
