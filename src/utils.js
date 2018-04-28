/**
 * Checks if passed argument is an object.
 * @param  {mixed}  obj Item to check,
 * @return {Boolean}    True if `obj` is an object.
 */
const isObject = (obj) => !!obj && obj.constructor === Object;

/**
 * Creates shallow copy of an object.
 * @param  {Object} obj Object to be cloned.
 * @return {Object}     New object.
 */
const recreate = (obj) => Object.assign({}, obj);

/**
 * Creates deep copy of an object. Does not handle circular reference.
 * @param  {Object} obj Object to be cloned.
 * @return {Object}     New object.
 */
const clone = (obj) => JSON.parse(JSON.stringify(obj));

module.exports = {
  isObject,
  recreate,
  clone
};
