/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  let mean, sum, mode;
  let max = 0;
  const tally = {};
  const podium = [];

  sum = array.reduce(function(prev, curr) {
    if (tally[curr]) tally[curr]++;
    tally[curr] = 1;
    return prev + curr;
  }, 0);

  mean = sum / array.length;
  mean = Math.floor(mean);

  for (let key in tally) {
    if (tally[key] > max) {
      max = tally[key];
      mode = key;
  }

  for (let key in tally) {
    if (tally[key] === max) {
      podium.push(key);
    }
  }

  if (podium.length > 1) {
    mode = podium.reduce(function(prev, curr) {
      return prev > curr ? prev : curr;
    });
  }

  return mode === mean;
}

module.exports = modemean;
