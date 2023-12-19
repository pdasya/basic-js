const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  calculateDepth(inputArray, depth = 1) {
    let maxDepth = depth; 

    for (let i = 0; i < inputArray.length; i+=1) {
      if (Array.isArray(inputArray[i])) {
        const currentDepth = this.calculateDepth(inputArray[i], depth + 1); 
        maxDepth = Math.max(maxDepth, currentDepth); 
      }
    }
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
