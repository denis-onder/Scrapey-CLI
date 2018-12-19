const prettier = require('prettier'),
  prettierConfig = require('./prettier.json');

module.exports = (payload) => {
  return prettier.format(payload, prettierConfig);
};
