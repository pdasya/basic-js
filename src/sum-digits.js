const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(inputNumber) {
  let result = 0;
  let inputString = inputNumber.toString();

  for (let i = 0; i < inputString.length; i++) {
    result += parseInt(inputString[i]);
  }

  if (result >= 10) {
    return getSumOfDigits(result);
  }

  return result;
}

module.exports = {
  getSumOfDigits
};
