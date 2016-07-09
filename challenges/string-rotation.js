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
	// test to see if they are the same at start
	if (s1 == s2) return true;
	// split s2 into an array
	s2Arr = s2.split('');
	// shift last element of s2 arr into the front and test to see if it is the same
	// as s1
	for (var i = 0; i < s2Arr.length; i++) {
		s2Arr.unshift(s2Arr.pop());
		s2Str = s2Arr.join('');
		if (s2Str == s1) return true;
	}
	return false;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
