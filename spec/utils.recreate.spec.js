const { expect } = require('chai');
const { recreate } = require('../src/utils');

describe('recreate', () => {
  it('returns new object', () => {
    const original = {};
    const result = recreate(original);

    expect(result).to.not.equal(original);
  });

  it('copies direct properties', () => {
    const original = {
      key: 'value'
    };
    const result = recreate(original);

    expect(result.key).to.equal(original.key);
  });

  it('assignes deep properties', () => {
    const original = {
      key: {}
    };
    const result = recreate(original);

    expect(result.key).to.equal(original.key);
  });
});
