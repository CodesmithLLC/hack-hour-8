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
  if (typeof s1 !== 'string' || typeof s2 !== 'string') {
    return 'type error: arguments needs to be strings';
  }
  if (s1.length !== s2.length) return false;

  for (let i = 0; i < s1.length; i++) {
    if (s1 === s2) return isSubstring(s1, s2);
    s2 = s2.slice(-1) + s2.slice(0, -1);
  }
  return false;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
