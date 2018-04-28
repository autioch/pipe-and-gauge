const createApp = require('./createApp');
const createStore = require('./createStore');
const merge = require('./merge');
const { isObject, recreate, clone } = require('./utils');

module.exports = {
  createApp,
  createStore,
  isObject,
  recreate,
  clone,
  merge
};
