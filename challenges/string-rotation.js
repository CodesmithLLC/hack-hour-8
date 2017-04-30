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
  let i = 0;
  let j = 0;
  let res = false;

  if (typeof s1 !== 'string' || typeof s2 !== 'string') return false;
  if (s1.length !== s2.length) return false;
  if (s1 === s2) return true;

  for (j; j < s2.length; j++) {
    for (i; i < s1.length; i++) {
      if (isSubstring(s1[i], s2[j])) {
        res = true;
      }
    }
  }

  return res;
}

module.exports = { isSubstring: isSubstring, stringRotation: stringRotation };
