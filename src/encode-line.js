const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(inputString) {
 let result = ''; 
 let count = 1; 

 for (let i = 1; i <= inputString.length; i+=1) {
  if (inputString[i] === inputString[i-1]) {
    count+=1; 
  } else {
    if (count > 1) {
      result += `${count}${inputString[i-1]}`;
    } else {
      result += inputString[i-1]; 
    }
    count = 1; 
  }
 }

return result;
}

module.exports = {
  encodeLine
};
