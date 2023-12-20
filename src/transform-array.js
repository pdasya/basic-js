const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(inputArray) {
  if (!Array.isArray(inputArray)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];

  for (let i = 0; i < inputArray.length; i+=1) {
    if (inputArray[i] === '--discard-next') {
      i++;
    } else if (inputArray[i] === '--discard-prev') {
      if (i > 0 && inputArray[i - 2] !== '--discard-next') {
        result.pop();
      }
    } else if (inputArray[i] === '--double-next') {
      if (i < inputArray.length - 1 && inputArray[i + 1] !== '--discard-prev') {
        result.push(inputArray[i + 1]);
      }
    } else if (inputArray[i] === '--double-prev') {
      if (i > 0 && inputArray[i - 2] !== '--discard-next') {
        result.push(inputArray[i - 1]);
      }
    } else {
      result.push(inputArray[i]);
    }
  }

  return result;
}


module.exports = {
  transform
};
