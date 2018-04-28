require('node-jsx').install();

const pipeAndGauge = require('../index');
const { expect } = require('chai');

describe('pipeAndGauge', () => {
  it('is an object', () => {
    expect(typeof pipeAndGauge).to.equal('object');
  });

  it('exposes required methods', () => {
    expect(typeof pipeAndGauge.createApp).to.equal('function');
    expect(typeof pipeAndGauge.createStore).to.equal('function');
  });

  it('exposes optional utils', () => {
    expect(typeof pipeAndGauge.isObject).to.equal('function');
    expect(typeof pipeAndGauge.recreate).to.equal('function');
    expect(typeof pipeAndGauge.clone).to.equal('function');
    expect(typeof pipeAndGauge.merge).to.equal('function');
  });
});
