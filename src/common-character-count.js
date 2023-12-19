const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(string1, string2) {
 const string1Obj = {}; 
 const string2Obj = {}; 

 for (let char of string1) {
  string1Obj[char] = (string1Obj[char] || 0) + 1; 
 }

 for (let char of string2) {
  string2Obj[char] = (string2Obj[char] || 0) + 1; 
 }

 let commonCount = 0; 

 for (let char in string1Obj) {
  if (string2Obj[char]) {
    commonCount += Math.min(string1Obj[char], string2Obj[char]);
  }
 }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
