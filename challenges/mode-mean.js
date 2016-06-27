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
/*
MEAN CALCULATION (find the average):
get the length of the array
get the sum of the array (array reduce maybe)
divide the sum of the array by the length to get the mean; store that
MODE CALCULATION (what element occurs the greatest number of times):
slice the first element from arr
  (1) assign that slice to a key in the modeObj
  (2) make the value counter 1
  (3) slice the new arr[0] from the arr and compare it to the keys in modeObj
    (4a) if there is a match, increment the value of that key by 1
    (4b) if there is no match, add that slice to the modeObj as a new key with the value of 0
  once the loop through each item in the array is complete (or forEach function)
  (1) sort the modeObj by values
    (2) compare that highest k:v pair to the pair preceding it.
      (3a) if they are different, use the KEY of the highest k:v pair as MODE
      (3b) if they are the same, compare again to the one before it (checking for multiple modes)
        (4) if there are multiple kv pairs with the same (highest) frequency,
            have to grab the keys from each one of those and get the average
            (rewrite mean finder as its own function)
for each element in the array, compare


*/



function modemean(array) {
  let arr = array;

  let mode;
  let i = 0;
  let j = 0;
  let sum = 0;
  let modeSum = 1;
  let modeObj = {};

// MEAN CALCULATION
  function meanCalc (array) {
    for (i; i < array.length; i++) {
      sum += array[i];
    }

    return sum / array.length;
  }

  let mean = meanCalc(array);

// MODE CALUCULATION

  for (key in modeObj) { //this isn't going to work yet because it will add too many
    for (j; j < array.length; j++){
      if (/*array[j] does not exist as a key in modeObj*/) {
        modeObj[array[j]] = modeSum;
        modeSum++;
      }

      if (/*array[j] exists as a key in modeObj */) {
        modeObj[array[j]] = ++modeSum;
      }
    }
  }

  //sort the object by value

// COMPARISON
  return (mean === mode);
}

module.exports = modemean;
