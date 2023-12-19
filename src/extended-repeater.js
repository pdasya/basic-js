const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(inputString, options) {
  let result = '';
  let additionResult = [];

  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  for (let j = 0; j < additionRepeatTimes; j++) {
    additionResult.push(String(addition));
  }
  let additionString = additionResult.join(additionSeparator);

  for (let i = 0; i < repeatTimes; i++) {
    result += String(inputString) + additionString;

    if (i !== repeatTimes - 1) {
      result += separator;
    }
  }

  return result;
}

module.exports = {
  repeater
};
