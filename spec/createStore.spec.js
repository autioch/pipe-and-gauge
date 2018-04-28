const { expect } = require('chai');
const createStore = require('../src/createStore');

describe('createStore', () => {
  it('is a function', () => {
    expect(createStore).to.be.a('function');
  });

  it('accepts one argument', () => {
    expect(createStore.length).to.be.equal(1);
  });

  it('will throw when called without arguments', () => {
    expect(() => createStore()).to.throw;
  });
});

describe('`createStore` can\'t work without actions dictionary ', () => {
  it('will throw when called with null', () => {
    expect(() => createStore(null)).to.throw;
  });

  it('will throw when called with undefined', () => {
    expect(() => createStore(undefined)).to.throw;
  });

  it('will throw when called with an array', () => {
    expect(() => createStore([])).to.throw;
  });

  it('will throw when called with a string', () => {
    expect(() => createStore('')).to.throw;
  });

  it('will throw when called with a number', () => {
    expect(() => createStore(10)).to.throw;
  });
});

describe('`createStore` produces valid store when passed actions dictionary', () => {
  const store = createStore({
    testAction() {}
  });

  it('will return an object', () => {
    expect(typeof store).to.equal('object');
  });

  it('store will be frozen', () => {
    expect(Object.isFrozen(store)).to.equal(true);
  });

  it('will have method `getState`', () => {
    expect(typeof store.getState).to.equal('function');
  });

  it('will have action method `testAction`', () => {
    expect(typeof store.testAction).to.equal('function');
  });
});

describe('`createStore` listener', function requiresContext() {
  it('will be called after action is called', (done) => {
    this.timeout(2); // eslint-disable-line no-invalid-this
    const store = createStore({
      testAction() {}
    });

    store.subscribe(() => done());
    store.testAction();
  });
});
