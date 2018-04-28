module.exports = {
  extends: 'qb',
  root: true,
  env: {
    mocha: true
  },
  rules: {
    'no-unused-expressions': ['off'],
    'max-nested callbacks': ['off'],
    'no-empty-function': ['off'],
    'no-undefined': ['off'],
    'no-magic-numbers': ['off']
  }
};
