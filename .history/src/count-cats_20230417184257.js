const { NotImplementedError } = require('../extensions/index.js');

module.exports = function countCats(arr) {
  return arr.flat().filter(cat => cat == '^^').length;
};