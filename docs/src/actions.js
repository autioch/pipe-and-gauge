module.exports = {
  increment({ state }) {
    return {
      count: state.count + 1
    };
  },
  start() {
    /* Just for first render. Can do anything. */
  }
};
