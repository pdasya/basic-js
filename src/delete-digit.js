const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(inputNumber) {
  let inputString = inputNumber.toString();
  let arr = [];

  for (let i = 0; i < inputString.length; i += 1) {
    let newString = inputString.slice(0, i) + inputString.slice(i + 1);
    arr.push(Number(newString));
  }

  let maxValue = arr.length ? arr[0] : 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  return maxValue;
}


module.exports = {
  deleteDigit
};
