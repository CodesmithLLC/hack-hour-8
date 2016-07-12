/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  var split = s1.split(" ");
  var sizes = []
  for(var i = 0; i < split.length; i++) {
    if (s2.length === split[i].length) {
      sizes.push(split[i]);
    }
  }

  if (sizes.length) === 0 { return false };

  var s2Sorted = s2.split("").sort(function(a, b) { return a - b});
  

}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
