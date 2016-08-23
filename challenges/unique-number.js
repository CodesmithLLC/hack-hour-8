/**
 * Given an array of IDs, which contains many duplicate (there are two) integers and one unique integer,
 * find the unqiue integer.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  var cache = {};
  for (var i = 0; i < array.length; i++) {
    if (!cache.hasOwnProperty(array[i])) {
      cache[array[i]] = 0;
    } else {
      cache[array[i]] = cache[array[i]] + 1;
    }
  }

  for (var key in cache) {
    if (cache[key] === 0) {
      return key;
    }
  }
  console.log(cache);
}

// console.log(uniqueNumber([1,2,1,3,3]));

module.exports = uniqueNumber;
