const { NotImplementedError } = require('../extensions/index.js');

class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    let max = 0;
    arr.forEach(elem => { Array.isArray(elem) ?  max = Math.max(this.calculateDepth(elem), max) : 1; });
  return max + 1;
  }
}
module.exports = class DepthCalculator {
  
};