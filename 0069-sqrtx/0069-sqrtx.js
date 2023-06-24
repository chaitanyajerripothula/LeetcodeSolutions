/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) return 0; // Base case

  let guess = x; // Start with the initial guess as x

  while (true) {
    const nextGuess = 0.5 * (guess + x / guess);
    if (nextGuess === guess || nextGuess === Math.floor(guess)) break; // Check for convergence
    guess = nextGuess; // Update the guess
  }

  return Math.floor(guess);

};