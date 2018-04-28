/**
 * Setups wrapper for the store that will allows subscriptions and notifications of the state change.
 * @param  {Object} store Store to which emitter will be attached.
 * @return {Object}       Api of the emitter - notify and subscribe functions.
 */
module.exports = function createEmitter(store) {
  let notifyTimeout = null;
  const listeners = [];

  /**
   * Calls every listener with a snapshot of the state.
   * If any changes of the state happen during the notify, another notify will be fired later.
   * @private
   * @return {undefined} Nothing.
   */
  function notifyListeners() {
    notifyTimeout = null;

    const data = {
      state: store.getState(),
      store
    };

    listeners.forEach((listener) => listener(data));
  }

  /**
   * Calls all listeners of the state change. Debounced to batch multiple changes into one redraw.
   * @return {undefined} Nothing.
   */
  function notify() {
    if (notifyTimeout) {
      return;
    }
    notifyTimeout = setTimeout(notifyListeners, 1);
  }

  /**
   * Allows listening to state changes.
   * @param  {Function} listener Function to be called when state changes.
   * @return {undefined}         Nothing.
   */
  function subscribe(listener) {
    listeners.push(listener);
  }

  return {
    notify,
    subscribe
  };
};
