# Pipe and gauge

Yet another state container. Designed to be fast and simple, with minimum setup required.

## Installation
`npm i pipe-and-gauge`

## Usage
1. Define actions for changing the state.
2. Create react components representing the state. All of them can be pure functional components.
3. Use `createApp` to bind `store` with `app view`.
4. There are no reducers, no other stuff.


### createApp
Function that wires together `actions` dictionary, `initialState` object, react `view` and `el` (HTMLElement). Underneath, it creates stanard store, which is later returned to allow actions calling and subscription.

React view passed will recieve two properties: `store` and `state`.

```javascript
const { createApp } = require('pipe-and-gauge');
const actions = require('./actions');
const initialState = require('./initialState');
const ReactAppView = require('./app');

const el = document.querySelector('#root');

const store = createApp(actions, initialState, ReactAppView, el);

store.action(); // triggers first render
```


### createStore
Function that accepts `actions` dictionary and `initialState`. Returns store object, which has 2 main methods: `subscribe`, `getState` and all actions passed to it. This store serves as state container _and_ vessel for all the actions that can be called inside components.

```javascript
const { createStore} = require('pipe-and-gauge');
const actions = require('./actions');
const initialState = require('./initialState');

const store = createStore(actions, initialState);

store.subscribe(({state, _store}) => console.log(state));
store.action();
```

### actions
Actions are the way to change the state the right way. Only there we should see manipulation. React components should be only used represent the current state in the DOM.
Action accepts single argument, in which are available:
- `state` current state
- `data` argument with with action was called
- `store` instance of the store

```javascript
function action({ state, data, store }){
  return {
    /* We don't need to spread the rest of the state */
    counter: state.counter + 1
  }
}
```

```javascript
function compositeAction({ state, data, store }){
  /* Action can call other ations.
   * It's best to avoid direct manipulation of state in such actions. */
  store.action(data).someOtherAction();
}
```

```javascript
const component = ({ state, store }) => (
  <div onClick={store.action}>
    {state.counter}
  </div>
)
```

### Exposed utilites

- `merge` performs merging action result into state; deeply merges the change, allowing actions to only return actually changing state
- `isObject` checks if variable is an object
- `recreate` shallow clone, assigns direct properties of an object to new object
- `clone` deep clone, uses JSON parse/stringify.
