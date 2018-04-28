const { isObject, recreate } = require('./utils');

/**
 * Deeply merge partial change to the original object.
 * @param  {Object} state       State to which changes will be merged.
 * @param  {Object} [change={}] Change to be applied. Can be deep.
 * @return {Object}             Original, `state` object with changes applied.
 */
module.exports = function merge(state, change = {}) {
  const props = Object.keys(change);

  for (let index = 0; index < props.length; index++) {
    const key = props[index];
    const value = change[key];
    const old = state[key];

    state[key] = isObject(old) && isObject(value) ? recreate(merge(old, value)) : value;
  }

  return state;
};
