/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
 if (divisor === 0) {
    return Infinity; // Division by 0 is undefined
  }

  if (dividend === 0) {
    return 0; // Any number divided by 0 is 0
  }

  // Handle the edge case of dividing -2147483648 by -1
  if (dividend === -2147483648 && divisor === -1) {
    return 2147483647; // Return the maximum value for overflow case
  }

  // Handle the edge case of dividing -2147483648 by 1
  if (dividend === -2147483648 && divisor === 1) {
    return -2147483648; // Return the minimum value for the edge case
  }

  // Determine the sign of the quotient
  const isNegative = (dividend < 0) ^ (divisor < 0);

  // Take the absolute values
  let absDividend = Math.abs(dividend);
  const absDivisor = Math.abs(divisor);

  let quotient = 0;

  for (let i = 31; i >= 0; i--) {
    if ((absDividend >>> i) >= absDivisor) {
      quotient += 1 << i;
      absDividend -= absDivisor << i;
    }
  }

  // Adjust the sign of the quotient
  if (isNegative) {
    quotient = -quotient;
  }

  return quotient;

};