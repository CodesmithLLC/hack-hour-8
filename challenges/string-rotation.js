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
	if (s1.length !== s2.length) {
		return false;
	}
	
	let word1 = s1.split('').sort().join('');
	let word2 = s2.split('').sort().join('');
	
	return isSubstring(word1,word2);
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
