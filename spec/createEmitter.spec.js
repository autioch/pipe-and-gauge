const { expect } = require('chai');
const createEmitter = require('../src/createEmitter');
const createStore = require('../src/createStore');

describe('createEmitter', () => {
  it('is a function', () => {
    expect(createEmitter).to.be.a('function');
  });

  it('accepts one argument', () => {
    expect(createEmitter.length).to.be.equal(1);
  });

  it('will throw when called without arguments', () => {
    expect(() => createEmitter()).to.throw;
  });
});

describe('`createEmitter` produces valid emitter when passed store', () => {
  const emitter = createEmitter(createStore({}));

  it('will return an object', () => {
    expect(typeof emitter).to.equal('object');
  });

  it('will have method `subscribe`', () => {
    expect(typeof emitter.subscribe).to.equal('function');
  });

  it('will have action method `notify`', () => {
    expect(typeof emitter.notify).to.equal('function');
  });
});
