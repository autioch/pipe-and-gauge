const { expect } = require('chai');
const { isObject } = require('../src/utils');

describe('isObject', () => {
  it('returns true for an object', () => {
    expect(isObject({})).to.equal(true);
  });

  it('returns false for an array', () => {
    expect(isObject([])).to.equal(false);
  });

  it('returns false for null', () => {
    expect(isObject(null)).to.equal(false);
  });

  it('returns false for undefined', () => {
    expect(isObject(undefined)).to.equal(false);
  });

  it('returns false for string', () => {
    expect(isObject('')).to.equal(false);
  });

  it('returns false for a number', () => {
    expect(isObject(1)).to.equal(false);
  });

  it('returns false for promise', () => {
    expect(isObject(Promise)).to.equal(false);
  });
});
