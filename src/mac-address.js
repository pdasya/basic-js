const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(macAddress) {
  let macArray = macAddress.split('-'); 

  if (macArray.length !== 6) {
    return false; 
  }

  for (let mac of macArray) {
    if (mac.length !== 2) {
      return false; 
    }

    for (let char of mac) {
      const charCode = char.charCodeAt(0); 
      const isDigit = (charCode >= 48 && charCode <= 57);
      const isUpperCaseLetter = (charCode >= 65 && charCode <= 70);
      const isLowerCaseLetter = (charCode >= 97 && charCode <= 102);

      if (!(isDigit || isUpperCaseLetter || isLowerCaseLetter)) {
        return false;
      }
    }
  }
  return true; 
}


module.exports = {
  isMAC48Address
};
