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
  var t = {};
  for (let i = 0; i < array.length; i++) {
    var key = array[i];
    if (t[key]) return key;
    t[key] = 1;
  }
  return false;
}
module.exports = uniqueNumber;
