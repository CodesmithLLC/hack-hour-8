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
  var mean = Math.floor(array.reduce(function(acc, item) {
    return acc + item;
  }, 0) / array.length);
  
  var mode = mode(array)


  function mode(arr) {
    var obj = {};

    arr.forEach(function(item) {
      if(obj[item] === undefined) {
        obj[item] = 1;
      } else {
        obj[item]++;
      }
    });


    var maxNum = 0
    var count = 0;


      for(var n in obj) {
        if(obj[n] >= count && (Number(n) > maxNum)) {
          maxNum = Number(n);
          count = obj[n];
        }
      }

      return maxNum;
    }

    return mode === mean;
}

module.exports = modemean;
