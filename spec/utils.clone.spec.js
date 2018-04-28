const { expect } = require('chai');
const { clone, isObject } = require('../src/utils');

describe('clone', () => {
  it('works for an object', () => {
    expect(isObject(clone({}))).to.equal(true);
  });

  it('works for an array', () => {
    expect(Array.isArray(clone([]))).to.equal(true);
  });

  it('returns false for null', () => {
    expect(clone(null)).to.equal(null);
  });

  it('works for a string', () => {
    expect(clone('')).to.equal('');
  });
});
