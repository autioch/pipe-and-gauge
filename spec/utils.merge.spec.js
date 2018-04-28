const { expect } = require('chai');
const merge = require('../src/merge');

describe('merge', () => {
  it('returns original object', () => {
    const original = {};
    const change = {
      key: 'value'
    };
    const result = merge(original, change);

    expect(original).to.equal(result);
  });

  it('copies shallow properties', () => {
    const original = {};
    const change = {
      key: 'value'
    };
    const result = merge(original, change);

    expect(result.key).to.equal(change.key);
  });

  it('sets deep properties', () => {
    const original = {};
    const change = {
      key: {
        keyTwo: 'value'
      }
    };
    const result = merge(original, change);

    expect(result.key).to.equal(change.key);
    expect(result.key.keyTwo).to.equal(change.key.keyTwo);
  });

  it('merges deep properties', () => {
    const original = {
      key: {}
    };
    const change = {
      key: {
        keyTwo: 'value'
      }
    };
    const result = merge(original, change);

    expect(result.key).to.not.equal(change.key);
    expect(result.key.keyTwo).to.equal(change.key.keyTwo);
  });
});
