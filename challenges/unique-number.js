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
  let uniq = {}
  for (var i = 0; i < array.length; i++){
    if (!uniq[array[i]]) uniq[array[i]] = 1;
    else uniq[array[i]] = uniq[array[i] + 1];
    }
  for (var prop in uniq) {
    if (uniq[prop] === 1) return prop;
  }
}

module.exports = uniqueNumber;
