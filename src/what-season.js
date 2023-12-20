const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();

  if (month >= 2 && month <= 4) {
    return 'spring';
  } else if (month >= 5 && month <= 7) {
    return 'summer';
  } else if (month >= 8 && month <= 10) {
    return 'autumn';
  } else {
    return 'winter';
  }
}

// Test cases
try {
  const springDate = new Date(2020, 2, 31);
  console.log(getSeason(springDate)); // Output: 'spring'

  const invalidDate = new Date('not a date');
  console.log(getSeason(invalidDate)); // Throws Error: 'Invalid date!'

  console.log(getSeason()); // Output: 'Unable to determine the time of year!'
} catch (error) {
  console.error(error.message);
}




module.exports = {
  getSeason
};
