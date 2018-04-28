require('node-jsx').install();

const { expect } = require('chai');
const createApp = require('../src/createApp');

describe('createApp', () => {
  it('is a function', () => {
    expect(createApp).to.be.a('function');
  });

  it('accepts one argument', () => {
    expect(createApp.length).to.be.equal(4);
  });

  it('will throw when called without arguments', () => {
    expect(() => createApp()).to.throw;
  });

  it('will return store', () => {
    const store = createApp({
      testAction() {}
    }, {}, () => {}, {});

    expect(typeof store).to.equal('object');
    expect(Object.isFrozen(store)).to.equal(true);
    expect(typeof store.testAction).to.equal('function');
    expect(typeof store.subscribe).to.equal('function');
  });
});
