const { createApp } = require('../../src');
const actions = require('./actions');
const initialState = require('./initialState');
const ReactAppView = require('./app');

const el = document.querySelector('#root');

const store = createApp(actions, initialState, ReactAppView, el);

store.start();
