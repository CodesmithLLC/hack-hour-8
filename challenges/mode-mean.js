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


// This thing is ugly, please clean up

function modemean(array) {
  // make some easy variables to help manipulate data
  let mode = [];
  let len = array.length;

  let sum = array.reduce(function(prev, curr) {
    return prev + curr;
  });

  let mean = Math.floor(sum / len);

  let sortArr = array.sort(function(a, b) {
    return a > b;
  });

  //find multiples in given array
  let multiplesArr = [];

  array.reduce(function(prv, crr, idx, arr) {
    if (crr === arr[idx + 1]) {
      prv = crr;
      multiplesArr.push(crr);
    } else if (crr === arr[idx - 1]) {
      multiplesArr.push(crr);
    }
  });

  //create an object to help evaluate possible mulitples
  let countObj = {};

  multiplesArr.forEach(function(val, i, ar) {
    if (countObj[val]) {
      countObj[val]++;
    } else {
      countObj[val] = 1;
    }
  });

  //create variable that will hold greatest count between mulitples
  let modeCount;

  for (let key in countObj) {
    if (modeCount === undefined) modeCount = countObj[key];

    if (countObj[key] > modeCount) modeCount = countObj[key];
  }
  //use count to help evaluate which possible modes to push
  for (let k in countObj) {
    if (countObj[k] === modeCount) mode.push(k);
  }
  //return boolean result from evaluation between mean and greatest 
  //mode
  return (mean === Math.max(...mode)) ? true : false;

  //Edge cases need to be filled in
}

module.exports = modemean;
