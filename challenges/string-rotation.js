/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0 && s1.length === s2.length;
}
function reverse(s) {
  return s.split('').reverse().join('');
}
function stringRotation(s1, s2) {
  var revS1 = reverse(s1);
  var revS2 = reverse(s2);
  return isSubstring(s1, s2) || isSubstring(revS1, s2) || isSubstring(revS2, s1);
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
