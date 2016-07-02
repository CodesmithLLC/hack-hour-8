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
//if s1 and s2 are different lengths, return false
  if (s1.length !== s2.length) return false;
//split strings into array, sort, then join into string
  const firstString = s1.split('').sort().join('');
  const secondString = s2.split('').sort().join('');
//compare sorted strings
  return isSubstring(firstString, secondString);
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
