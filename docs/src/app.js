const React = require('react');

module.exports = ({ state, store }) => (
  <div>
    <div onClick={store.increment}>
      Clicks: {state.count}
    </div>
  </div>
);
